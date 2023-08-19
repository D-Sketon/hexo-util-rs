const {
  Cache,
  CacheStream,
  Color,
  camelCaseKeys,
  createSha1Hash,
  decodeUrl,
  deepMerge,
  encodeUrl,
  fullUrlFor,
  gravatar,
  hash,
  highlight,
  htmlTag,
  isExternalLink,
  Pattern,
  Permalink,
  prettyUrls,
  prismHighlight,
  relativeUrl,
  spawn,
  stripIndent,
  tocObj,
  truncate,
  urlFor,
} = require('./common')
const { escapeDiacritic, escapeHtml, escapeRegExp, slugize, stripTags, unescapeHtml, wordWrap } = require('./utils')

module.exports = {
  Cache,
  CacheStream,
  Color,
  Pattern,
  Permalink,
  camelCaseKeys,
  createSha1Hash,
  decodeUrl,
  deepMerge,
  encodeUrl,
  escapeDiacritic,
  escapeHtml,
  escapeRegExp,
  fullUrlFor,
  gravatar,
  hash,
  highlight,
  htmlTag,
  isExternalLink,
  prettyUrls,
  prismHighlight,
  relativeUrl,
  slugize,
  spawn,
  stripIndent,
  stripTags,
  tocObj,
  truncate,
  unescapeHtml,
  urlFor,
  wordWrap,
}
