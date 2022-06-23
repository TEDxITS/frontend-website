type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};

export function openGraph({
  siteName,
  templateTitle,
  description,
  logo = 'https://tedxits.org/favicon/large-og.png',
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());
  return `https://og-blush.vercel.app/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}

export const getToday = () => {
  const today = new Date();

  return `${(today.getMonth() + 1).toString().padStart(2, '0')}/${today
    .getDate()
    .toString()
    .padStart(2, '0')}/${today
    .getFullYear()
    .toString()
    .padStart(4, '0')} ${today.getHours().toString().padStart(2, '0')}:${today
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${today.getSeconds().toString().padStart(2, '0')}`;
};
