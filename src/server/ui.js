export const doGet = () => {
  return HtmlService.createTemplateFromFile('apps')
         .evaluate().setTitle("Apps - Internal").setFaviconUrl('https://i.ibb.co/cTRSzFb/da2ndlogo.png');
}
