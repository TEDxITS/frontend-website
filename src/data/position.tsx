export enum PositionType {
  'Event' = 'event',
  'Finance' = 'finance',
  'Marketing & Branding' = 'marketing',
  'Human Resources & Administrative (HRA)' = 'human',
  'Curator' = 'curator',
}

export type PositionLinkType = {
  title: keyof typeof PositionType;
  href: PositionType;
};

export type PositionData = {
  title: keyof typeof PositionType;
  description: React.ReactNode;
  dataClassName?: string;
  href: PositionType;
  data: JobType[] | [];
  image: string;
};

export type JobType = {
  title: React.ReactNode;
  description: React.ReactNode;
};

export const menuSection: PositionLinkType[] = [
  {
    title: 'Event',
    href: PositionType.Event,
  },
  {
    title: 'Finance',
    href: PositionType.Finance,
  },
  {
    title: 'Marketing & Branding',
    href: PositionType['Marketing & Branding'],
  },
  {
    title: 'Human Resources & Administrative (HRA)',
    href: PositionType['Human Resources & Administrative (HRA)'],
  },
  {
    title: 'Curator',
    href: PositionType.Curator,
  },
];

export const positionData: PositionData[] = [
  {
    title: 'Event',
    description: (
      <>
        Responsible for organizing and coordinating all technicalities,
        procedures, and the event&apos;s concept during the event planning
        process to ensure everything is in order or approve all aspects before
        the day of the event.
      </>
    ),
    href: PositionType.Event,
    dataClassName: 'grid-cols-1 lg:grid-cols-3 gap-6 ',
    data: [
      {
        title: <>Logistics &amp; Accommodation</>,
        description: (
          <>
            Accountable for the technical execution of events in alignment with
            the event structure and format of the whole event by providing the
            necessary tools or equipment. In terms of accommodation, also
            responsible for individuals transportation, security, protocol,
            venue licensing and distribution of food &amp; beverage for all for
            all activities of TEDxITS 2022.
          </>
        ),
      },
      {
        title: <>Experiential Design</>,
        description: (
          <>
            Accountable for the creative execution of “setting the mood” at all
            TEDxITS events (stage design, decorations, venue vendor plan,
            interactive booth) in alignment with the whole event.
          </>
        ),
      },
      {
        title: <>Program</>,
        description: (
          <>
            Responsible for innovating, developing, and executing the
            event&apos;s concepts in alignment with the theme, topic, and
            speakers from the Curator Department. Job duties include managing
            event set-up, tear down and follow-up processes, liaise with
            vendors, exhibitors, stakeholders, and coordinate with the other
            divisions.
          </>
        ),
      },
    ],
    image: '',
  },
  {
    title: 'Finance',
    description: (
      <>
        Responsible for gathering the fund needed (inflow) to execute TEDxITS
        2022 smoothly and successfully through financial management and planning
        the necessary expenditure on various assets.
      </>
    ),
    href: PositionType.Finance,
    dataClassName: 'grid-cols-1 lg:grid-cols-3 gap-6 ',
    data: [
      {
        title: <>Fundraising</>,
        description: (
          <>
            In charge of designing merchandise, coming up with unique and
            out-of-the-box merchandise ideas, managing production, sales, and
            marketing, providing sales and revenue report. Coordinates closely
            with Curator Department to ensure alignment between merchandise
            design and grand theme and with Marketing Department to achieve high
            sales.
          </>
        ),
      },
      {
        title: <>Partnership</>,
        description: (
          <>
            Accountable for initiating and maintaining partnership with external
            parties with the purpose of gathering funds (sponsorship) and media
            promotion for publication (public relations). This department is in
            charge of securing event sponsorship and exhibition income to
            achieve income targets.
          </>
        ),
      },
      {
        title: <>Ticketing</>,
        description: (
          <>
            Manage ticket-sales, ticketing system, concepting and controlling
            tickets and their delivery, coordinating with other departments
            regarding ticketing matters.
          </>
        ),
      },
    ],
    image: '',
  },
  {
    title: 'Marketing & Branding',
    description: (
      <>
        Responsible for creating awareness, promoting the products, adjusting
        with the target market, and maintaining existing customers. It
        strategizes all the activities that are concerned with branding
        (identity) and marketing.
      </>
    ),
    href: PositionType['Marketing & Branding'],
    dataClassName: 'grid-cols-1 md:grid-cols-2 gap-6 xl:gap-12',
    data: [
      {
        title: <>Marketing Strategy</>,
        description: (
          <>
            Accountable for the ideation and execution of marketing efforts
            (social media and content marketing) across all marketing channels
            (social media, e-mail, word-of-mouth, buzzer), including the content
            and copywriting.
          </>
        ),
      },
      {
        title: <>Graphic Design</>,
        description: (
          <>
            In charge for the graphic design realization of branding, marketing,
            and operational materials. Also, continuously maintaining the
            company&apos;s brand aesthetics, internally and externally.
          </>
        ),
      },
      {
        title: <>Media Production</>,
        description: (
          <>
            Accountable for the video production of branding, marketing, and
            operational materials. Job duties include taking video
            documentation, editing video, and creating motion pictures.
          </>
        ),
      },
      {
        title: <>Website</>,
        description: (
          <>
            Responsible for the construction, management, and development of the
            TEDxITS official website and receives content approval from the
            Marketing Director. Coordinates closely with the Ticketing Division
            for ticketing orders and Marketing Director for the branding and
            marketing materials and navigation.
          </>
        ),
      },
    ],
    image: '',
  },
  {
    title: 'Human Resources & Administrative (HRA)',
    description: (
      <>
        Responsible for the organization&apos;s knowledge management,
        secretarial/administrative affairs, and the management of human
        resources of TEDxITS 2022
      </>
    ),
    href: PositionType['Human Resources & Administrative (HRA)'],
    data: [],
    image: '/images/hra-volunteers.jpg',
  },
  {
    title: 'Curator',
    description: (
      <>
        Responsible for the essence of TEDxITS 2022; oversees the process of
        theme, topic, and speakers ideation for the event and marketing.
        Curators will also invite, prepare, and become liaison officers for
        speakers throughout the event.
      </>
    ),
    href: PositionType.Curator,
    data: [],
    image: '/images/curating-volunteers.jpg',
  },
];
