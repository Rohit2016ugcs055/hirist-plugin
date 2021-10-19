
export const trimText = (name) => {
  if (name) {
    let text = name.trim().toLowerCase();
    text = text.replace(/[`@!&|/\\#,+=()$~%.'"^:;*?<>{}]/g, '')
    text = text.replace(/ /g, '-');
    text = text.replace(/--/g, '-');
    text = text.replace(/--/g, '-');
    text = text.replace(/--/g, '-');
    return text;
  }
  return '';
}

export const calculateDateInFormat = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString()
}

export const createAdvancedUrl = (title, jobId, type) => {
  return `/${type}/${trimText(title)}-${jobId}.html`;
}