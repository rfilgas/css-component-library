export type SanitizeOptions = {
    ALLOWED_TAGS: string[];
    ALLOWED_ATTR: string[];
  };

  export const allowedHtmlTags: string[] = [
    'a',
    'abbr',
    'address',
    'b',
    'bdo',
    'big',
    'blockquote',
    'br',
    'caption',
    'cite',
    'code',
    'dd',
    'del',
    'dfn',
    'div',
    'dl',
    'dt',
    'em',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'i',
    'ins',
    'kbd',
    'li',
    'mark',
    'ol',
    'p',
    'pre',
    'q',
    's',
    'samp',
    'small',
    'span',
    'strong',
    'sub',
    'sup',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'u',
    'ul',
    'var'
];

export const rtfHtmlSanitizeOptions: SanitizeOptions = {
ALLOWED_TAGS: allowedHtmlTags,
ALLOWED_ATTR: [],
};

const testStyles: string = `
<!DOCTYPE html>
<html>
<head>
  <title>HTML Styles Test</title>
</head>
<body>
  <div style="border: 2px solid green; padding: 10px;">
    <div style="color: red;">color</div>
    <div style="font-size: 20px;">font-size</div>
    <div style="font-weight: bold;">font-weight</div>
    <div style="text-align: center;">text-align</div>
    <div style="text-decoration: underline;">text-decoration</div>
    <div style="background-color: yellow;">background-color</div>
    <div style="border: 1px solid black;">border</div>
    <div style="margin: 10px;">margin</div>
    <div style="padding: 10px;">padding</div>
    <div style="width: 100px;">width</div>
    <div style="height: 100px;">height</div>
    <div style="display: inline-block;">display</div>
    <div style="visibility: hidden;">visibility</div>
    <div style="opacity: 0.5;">opacity</div>
    <div style="position: relative;">position</div>
    <div style="top: 10px;">top</div>
    <div style="bottom: 10px;">bottom</div>
    <div style="left: 10px;">left</div>
    <div style="right: 10px;">right</div>
    <div style="z-index: 1;">z-index</div>
    <div style="overflow: auto;">overflow</div>
    <div style="cursor: pointer;">cursor</div>
    <div style="float: left;">float</div>
    <div style="clear: both;">clear</div>
    <div style="line-height: 2;">line-height</div>
    <div style="letter-spacing: 2px;">letter-spacing</div>
    <div style="word-spacing: 2px;">word-spacing</div>
    <div style="white-space: nowrap;">white-space</div>
    <div style="list-style: none;">list-style</div>
    <div style="border-radius: 5px;">border-radius</div>
    <div style="box-shadow: 2px 2px;">box-shadow</div>
    <div style="transition: all 0.5s;">transition</div>
    <div style="transform: rotate(45deg);">transform</div>
  </div>
</body>
</html>`;