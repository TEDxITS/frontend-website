export type BookDataType = {
  logo: string;
  backCover: string;
  elephant: string;
  title: string;
  subTitle: string;
  heading: React.ReactNode;
  content: React.ReactNode;
};

export const bookData: BookDataType[] = [
  {
    logo: '/svg/elephant-black.svg',
    backCover: '/images/book-1.jpg',
    elephant: 'Black Elephant',
    title: 'The Unspoken Taboo Words',
    subTitle: 'There is so much silence to be destroyed.',
    heading: (
      <>
        The <br /> Unspoken Tab<span className='font-sympath'>O</span>o Words.
      </>
    ),
    content: (
      <>
        The <b>final taboo</b> that everyone needs to deal with, yet people
        choose to keep their voice because of the <b>prohibition</b> they felt.
        How perfect the color <b>black</b> represents it. The will to stay
        silent, yet silence will never protect us.
      </>
    ),
  },
  {
    logo: '/svg/elephant-white.svg',
    backCover: '/images/book-2.jpg',
    elephant: 'White Elephant',
    title: 'The Unheard Voices',
    subTitle: 'The message that are left undelivered.',
    heading: (
      <>
        The
        <br /> Unheard
        <br />
        Voi<span className='font-sympath'>C</span>es.
      </>
    ),
    content: (
      <>
        All the colors in the spectrum combined will form the clear <b>white</b>
        . It&apos;s so white that it has the power to blind our eyes,{' '}
        <b>hindering the truth</b> to be conveyed and the message to be
        delivered. Yet, pure white doesn&apos;t exist in nature.
      </>
    ),
  },
  {
    logo: '/svg/elephant-red.svg',
    backCover: '/images/book-3.jpg',
    elephant: 'Red Elephant',
    title: 'The Unseen of Great Importance',
    subTitle: 'There is so much silence to be destroyed.',
    heading: (
      <>
        The Unseen
        <br />
        of Great
        <br />
        Im
        <span className='font-sympath'>p</span>ortance.
      </>
    ),
    content: (
      <>
        The color <b>red</b> denotes a problem that needs to be addressed, but
        instead of addressing it, they chose to <b>ignore and ignore it</b>. The
        tasteful lie is hard to resist indeed. May all the shadows be revealed.
        Let it all come out into the light.
      </>
    ),
  },
];
