import ProcessCard from "@/components/LogoCard";
const Process: React.FC = () => {
  

  return (
    <section className="cs_bg_filed" data-background="/assets/img/how_to_work_bg.svg">
      <div className="cs_height_115 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_section_heading_1_with_sub">
          <div className="cs_section_heading cs_style_1">
          </div>
          <p className="mb-0">
            Keeping the outdoor unit clean, and sealing any you leaks in your home can improve efficiency
          </p>
        </div>
        <div className="cs_height_45 cs_height_lg_45"></div>
        <div className="cs_card_1_wrap">
          <div className="cs_card_1_col">
            <ProcessCard
              Title="Cool Wave System"
              Content="Upgrade to the latest energy and efficient air conditioning Frost technology with Eco Cool"
              Img="/assets/img/icons/how_to_work_icon_1.svg"
            />
          </div>
          <div className="cs_card_1_col">
            <ProcessCard
              Title="Cool Wave System"
              Content="Upgrade to the latest energy and efficient air conditioning Frost technology with Eco Cool"
              Img="/assets/img/icons/how_to_work_icon_1.svg"
            />
          </div>
          <div className="cs_card_1_col">
            <ProcessCard
              Title="Cool Wave System"
              Content="Upgrade to the latest energy and efficient air conditioning Frost technology with Eco Cool"
              Img="/assets/img/icons/how_to_work_icon_1.svg"
            />
          </div>
          <div className="cs_card_1_col">
            <ProcessCard
              Title="Arctic Installations"
              Content="The Arctic Blast Repair service addresses all your air Eco Cool  conditioning repair needs"
              Img="/assets/img/icons/how_to_work_icon_2.svg"
            />
          </div>
          <div className="cs_card_1_col">
            <ProcessCard
              Title="Air Flow Solutions"
              Content="Our Quick Cool Installation and service provides fast and cooling efficient installation"
              Img="/assets/img/icons/how_to_work_icon_3.svg"
            />
          </div>
          <div className="cs_card_1_col">
            <ProcessCard
              Title="Emergency Service"
              Content="We handle everything from and assessing your cooling needs to positioning  Arctic Blast"
              Img="/assets/img/icons/how_to_work_icon_4.svg"
            />
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_70"></div>
    </section>
  );
};

export default Process;
