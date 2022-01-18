export enum PositionType {
  'Event' = 'event',
  'Finance' = 'finance',
  'Marketing & Branding' = 'marketing',
  'Human Resources & Administrative (HRA)' = 'human',
  'Curating' = 'curating',
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
    title: 'Curating',
    href: PositionType.Curating,
  },
];

export const positionData: PositionData[] = [
  {
    title: 'Event',
    description: (
      <>
        Responsible for the execution of the TEDxITS 2022 program (pre-event
        &amp; main event) and the technicalities that come with it. The Event
        Director ensures effective communication between managers in the
        department and serves as a representative when coordinating with other
        departments.
      </>
    ),
    href: PositionType.Event,
    dataClassName: 'grid-cols-1 lg:grid-cols-3 gap-6 ',
    data: [
      {
        title: <>Logistics &amp; Accommodation Volunteers</>,
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
        title: <>Experiential Design Volunteers</>,
        description: (
          <>
            Accountable for the creative execution of “setting the mood” at all
            TEDxITS events (stage design, decorations, venue vendor plan,
            interactive booth) in alignment with the whole event.
          </>
        ),
      },
      {
        title: <> Program Volunteers</>,
        description: (
          <>
            Accountable for the concepting and execution of event structure and
            format in alignment with the theme, topic, and speakers from the
            Curating Department. Recommended for the formation of sub-divisions:
            Pre-Event and Main Event.
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
        2022 smoothly and successfully. The Finance Director ensures effective
        communication between managers in the department and serves as a
        representative when coordinating with other departments.
      </>
    ),
    href: PositionType.Finance,
    dataClassName: 'grid-cols-1 lg:grid-cols-3 gap-6 ',
    data: [
      {
        title: <>Fundraising Volunteers</>,
        description: (
          <>
            Accountable for initiating channels (merchandise, service, etc) of
            income to gather the fund needed for the execution of TEDxITS 2022.
          </>
        ),
      },
      {
        title: <>Partnership Volunteers</>,
        description: (
          <>
            Accountable for initiating and maintaining partnership with external
            parties with the purpose of gathering funds (sponsorship) and media
            promotion for publication. Recommended for the formation of
            sub-divisions: Sponsorship &amp; Public Relation.
          </>
        ),
      },
      {
        title: <>Ticketing Volunteers</>,
        description: (
          <>
            Accountable for ticket salesof events under the TEDxITS program
            (pre-event &amp; main event). Job duties include group sales
            representatives, telemarketing, and online sales, in charge of
            establishing and maintaining an effective and efficient ticketing
            system. Coordinates closely with the Marketing Strategist to
            maximize the sales of tickets.
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
        Responsible for the branding (identity) and marketing (awareness,
        promotion, and sales through adjusting with the target market) of
        TEDxITS 2022. Specifically, the Marketing Director is expected to
        implement an effective and efficient system of design
        request-revision-approval-posting -archiving between the four divisions.
        The Marketing Director ensures effective communication between managers
        in the department and serves as a representative when coordinating with
        other departments.
      </>
    ),
    href: PositionType['Marketing & Branding'],
    dataClassName: 'grid-cols-1 md:grid-cols-2 gap-6 xl:gap-12',
    data: [
      {
        title: <>Marketing Strategist Volunteers</>,
        description: (
          <>
            Accountable for the ideation and execution of marketingefforts
            (social media and content marketing) across all marketing channels
            (social media, e-mail, word-of-mouth, buzzer), including the content
            and copywriting.
          </>
        ),
      },
      {
        title: <>Graphic Design Volunteers</>,
        description: (
          <>
            Accountable for the graphic design realization of
            branding,marketing, and operational materials as requested by
            stakeholders (Marketing Director &amp; Marketing Strategist).
            Recommended for the formation of sub-divisions based on the category
            of requests: Marketing (social media posts, etc) &amp; Operational
            (guidebook, website design, etc).
          </>
        ),
      },
      {
        title: <>Videography Volunteers</>,
        description: (
          <>
            Accountable for the videographic realization of branding, marketing,
            and operational materials as requested by stakeholders (Marketing
            Director, Marketing Strategist Division). Job duties include taking
            video documentation, editing video, and creating motion pictures.
          </>
        ),
      },
      {
        title: <>Website Volunteers</>,
        description: (
          <>
            Accountable for the construction, management, and development of the
            TEDxITS official website and receives content approval from the
            Marketing Director. Coordinates closely with the HRA in using the
            website as a main platform for recruitment, the Ticketing Division
            for ticketing orders, and Marketing Director for the branding and
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
        Responsible for the organization’s knowledge management (archiving of
        files, work platform), secretarial/administrative affairs (letters,
        certificate, etc) and the management of human resources (recruitment,
        maintenance, and development) of TEDxITS 2022. The HRA Director ensures
        effective communication between managers in the department and serves as
        a representative when coordinating with other departments.
      </>
    ),
    href: PositionType['Human Resources & Administrative (HRA)'],
    data: [],
    image: '/images/hra-volunteers.jpg',
  },
  {
    title: 'Curating',
    description: (
      <>
        Responsible for the essence of TEDxITS 2022; oversees the process of
        theme, topic, and speakers ideation for the event and marketing. The
        Curating Director ensures effective communication between managers in
        the department and serves as a representative when coordinating with
        other departments.
      </>
    ),
    href: PositionType.Curating,
    data: [],
    image: '/images/curating-volunteers.jpg',
  },
];
