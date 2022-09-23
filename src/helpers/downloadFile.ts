export const downloadFile = (url: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = 'paint-example.jpeg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
