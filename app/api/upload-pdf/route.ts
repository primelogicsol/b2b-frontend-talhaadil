
import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function POST(req: NextRequest) {
	try {
		const formData = await req.formData();
		const file = formData.get('file');
		if (!file || typeof file === 'string') {
			return NextResponse.json({ error: 'No file uploaded.' }, { status: 400 });
		}
		// @ts-ignore
		if (file.type !== 'application/pdf') {
			return NextResponse.json({ error: 'Only PDF files are allowed.' }, { status: 400 });
		}
		// @ts-ignore
		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);
		// Upload buffer to Cloudinary
		const upload = await new Promise((resolve, reject) => {
			cloudinary.uploader.upload_stream(
				{
					resource_type: 'raw',
					folder: 'pdf_uploads',
					filename_override: file.name,
				},
				(error, result) => {
					if (error) reject(error);
					else resolve(result);
				}
			).end(buffer);
		});
		// @ts-ignore
		return NextResponse.json({ url: upload.secure_url });
	} catch (error: any) {
		return NextResponse.json({ error: error.message || 'Upload failed.' }, { status: 500 });
	}
}
