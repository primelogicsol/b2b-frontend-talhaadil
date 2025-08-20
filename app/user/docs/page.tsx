import {
  FileText,
  Award,
  Package,
  Eye,
  Upload,
  Search,
  Filter,
  Download,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"

const documents = [
  { name: "Articles of Incorporation", status: "uploaded", date: "2024-01-15", size: "2.4 MB", type: "PDF" },
  { name: "Business License", status: "uploaded", date: "2024-01-20", size: "1.8 MB", type: "PDF" },
  { name: "Driver License", status: "uploaded", date: "2024-02-01", size: "0.9 MB", type: "PDF" },
  { name: "Trade License", status: "uploaded", date: "2024-02-10", size: "1.2 MB", type: "PDF" },
  { name: "Bank Statement", status: "uploaded", date: "2024-03-01", size: "3.1 MB", type: "PDF" },
  { name: "Product Catalog", status: "multiple", date: "2024-03-15", size: "12.5 MB", type: "Multiple", count: 5 },
  { name: "Certifications", status: "multiple", date: "2024-03-20", size: "8.7 MB", type: "Multiple", count: 3 },
]

const agreements = [
  {
    id: 1,
    title: "Partnership Agreement - Electronics",
    status: "active",
    signedDate: "2024-03-15",
    expiryDate: "2025-03-15",
    type: "Partnership",
    size: "4.2 MB",
    parties: ["TechCorp Solutions", "Electronics Hub Ltd"],
  },
  {
    id: 2,
    title: "Service Level Agreement",
    status: "active",
    signedDate: "2024-02-28",
    expiryDate: "2025-02-28",
    type: "Service",
    size: "2.8 MB",
    parties: ["TechCorp Solutions", "Service Provider Inc"],
  },
  {
    id: 3,
    title: "Non-Disclosure Agreement",
    status: "pending",
    signedDate: null,
    expiryDate: "2024-12-31",
    type: "Legal",
    size: "1.5 MB",
    parties: ["TechCorp Solutions", "Confidential Partner"],
  },
]

const productData = {
  selectedData: [
    {
      categoryId: "CAT001",
      categoryName: "Electronics",
      subcategories: [
        {
          subcategoryId: "SUB001",
          subcategoryName: "Mobile Phones",
          specifications: {
            brand: ["Apple", "Samsung"],
            model: ["iPhone 15 Pro", "Galaxy S24"],
            color: ["Black", "White", "Blue"],
          },
        },
        {
          subcategoryId: "SUB002",
          subcategoryName: "Laptops",
          specifications: {
            brand: ["Apple", "Dell"],
            model: ["MacBook Pro", "XPS 13"],
            color: ["Silver", "Black"],
          },
        },
      ],
    },
    {
      categoryId: "CAT002",
      categoryName: "Accessories",
      subcategories: [
        {
          subcategoryId: "SUB003",
          subcategoryName: "Phone Cases",
          specifications: {
            brand: ["OtterBox", "Spigen"],
            model: ["Defender", "Tough Armor"],
            color: ["Black", "Clear"],
          },
        },
      ],
    },
  ],
}

export default function DocsPage() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "uploaded":
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "multiple":
        return <Package className="h-4 w-4 text-blue-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "uploaded":
      case "active":
        return (
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            Active
          </span>
        )
      case "pending":
        return (
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
            Pending
          </span>
        )
      case "multiple":
        return (
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
            Multiple
          </span>
        )
      default:
        return (
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            Unknown
          </span>
        )
    }
  }

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8 max-w-[2000px] mx-auto">
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Documents & Agreements</h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
                Manage your business documents, agreements, and product selections.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white border border-blue-200 rounded-lg shadow-sm">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Total Documents</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">{documents.length}</p>
                  </div>
                  <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <p className="text-xs text-gray-600 mt-1 sm:mt-2">All documents uploaded</p>
              </div>
            </div>

            <div className="bg-white border border-blue-200 rounded-lg shadow-sm">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Active Agreements</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">
                      {agreements.filter((a) => a.status === "active").length}
                    </p>
                  </div>
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <p className="text-xs text-gray-600 mt-1 sm:mt-2">1 pending signature</p>
              </div>
            </div>

            <div className="bg-white border border-blue-200 rounded-lg shadow-sm">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Product Lines</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">{productData.selectedData.length}</p>
                  </div>
                  <Package className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                </div>
                <p className="text-xs text-gray-600 mt-1 sm:mt-2">
                  {productData.selectedData.reduce((acc, cat) => acc + cat.subcategories.length, 0)} total products
                </p>
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white border border-blue-200 rounded-lg shadow-sm">
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    placeholder="Search documents, agreements, or products..."
                    className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div className="bg-white border border-blue-200 rounded-lg shadow-sm">
            <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-200">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 flex items-center gap-2 flex-wrap">
                <FileText className="h-5 w-5 text-blue-600" />
                Business Documents
                <span className="ml-auto inline-block px-2 py-1 text-xs font-medium border border-gray-300 rounded-full bg-white text-gray-700">
                  {documents.length} documents
                </span>
              </h2>
              <p className="text-sm text-gray-600 mt-1">Your uploaded business documentation</p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div
                    key={doc.name}
                    className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-all hover:shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-2 sm:gap-3 flex-1">
                        {getStatusIcon(doc.status)}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm sm:text-base font-medium text-gray-900 truncate">{doc.name}</h4>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-1 text-xs sm:text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {doc.date}
                            </span>
                            <span>{doc.size}</span>
                            <span>{doc.type}</span>
                            {doc.count && <span>{doc.count} files</span>}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0 sm:ml-4">
                        {getStatusBadge(doc.status)}
                        <div className="flex gap-1">
                          <button className="h-8 w-8 p-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="h-8 w-8 p-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
                            <Download className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agreements Section */}
          <div className="bg-white border border-blue-200 rounded-lg shadow-sm">
            <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-200">
              <h2 className=" حتماً text-lg sm:text-xl font-semibold text-gray-900 flex items-center gap-2 flex-wrap">
                <Award className="h-5 w-5 text-blue-600" />
                Signed Agreements
                <span className="ml-auto inline-block px-2 py-1 text-xs font-medium border border-gray-300 rounded-full bg-white text-gray-700">
                  {agreements.length} agreements
                </span>
              </h2>
              <p className="text-sm text-gray-600 mt-1">Your partnership and business agreements</p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-3">
                {agreements.map((agreement) => (
                  <div
                    key={agreement.id}
                    className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-all hover:shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-2 sm:gap-3 flex-1">
                        {getStatusIcon(agreement.status)}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm sm:text-base font-medium text-gray-900 truncate">{agreement.title}</h4>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-1 text-xs sm:text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {agreement.signedDate ? `Signed: ${agreement.signedDate}` : "Not signed"}
                            </span>
                            <span>Expires: {agreement.expiryDate}</span>
                            <span>{agreement.size}</span>
                            <span className="inline-block px-2 py-1 text-xs font-medium border border-gray-300 rounded-full bg-white text-gray-700">
                              {agreement.type}
                            </span>
                          </div>
                          <div className="mt-1 sm:mt-2">
                            <p className="text-xs text-gray-500 truncate">Parties: {agreement.parties.join(", ")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0 sm:ml-4">
                        {getStatusBadge(agreement.status)}
                        <div className="flex gap-1">
                          <button className="h-8 w-8 p-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="h-8 w-8 p-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
                            <Download className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="bg-white border border-blue-200 rounded-lg shadow-sm">
            <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-200">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 flex items-center gap-2 flex-wrap">
                <Package className="h-5 w-5 text-blue-600" />
                Selected Products
                <span className="ml-auto inline-block px-2 py-1 text-xs font-medium border border-gray-300 rounded-full bg-white text-gray-700">
                  {productData.selectedData.reduce((acc, cat) => acc + cat.subcategories.length, 0)} products
                </span>
              </h2>
              <p className="text-sm text-gray-600 mt-1">Your product portfolio and specifications</p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-4">
                {productData.selectedData.map((category) => (
                  <div key={category.categoryId} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-200">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900">{category.categoryName}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Category ID: {category.categoryId}</p>
                        </div>
                        <span className="mt-2 sm:mt-0 inline-block px-2 py-1 text-xs font-medium border border-gray-300 rounded-full bg-white text-gray-700">
                          {category.subcategories.length} subcategories
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 space-y-3">
                      {category.subcategories.map((subcategory) => (
                        <div key={subcategory.subcategoryId} className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                            <div>
                              <h4 className="text-sm sm:text-base font-medium text-gray-900">{subcategory.subcategoryName}</h4>
                              <p className="text-xs sm:text-sm text-gray-600">ID: {subcategory.subcategoryId}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                            {Object.entries(subcategory.specifications).map(([key, values]) => (
                              <div key={key} className="space-y-2">
                                <label className="text-xs sm:text-sm font-medium text-gray-700 capitalize">{key}</label>
                                <div className="flex flex-wrap gap-2">
                                  {values.map((value, index) => (
                                    <span
                                      key={index}
                                      className="inline-block px-2 py-1 text-xs font-medium border border-gray-300 rounded-full bg-white text-gray-700"
                                    >
                                      {value}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  )
}
