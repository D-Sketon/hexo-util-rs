# `@napi-rs/hexo-util` · [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![https://github.com/liby/hexo-util-rs/actions](https://github.com/liby/hexo-util-rs/workflows/CI/badge.svg)](https://github.com/liby/hexo-util-rs/actions) [![NPM version](https://badge.fury.io/js/@libyo%2Fhexo-util.svg)](https://www.npmjs.com/package/@libyo/hexo-util)

> **Note**
>
> Utilities for Hexo.
> Generated from [napi-rs/package-template](https://github.com/napi-rs/package-template).

> **Warning**
>
> This project is in Beta stage. And there may some bugs existed.

## Installation

```bash
$ npm install @libyo/hexo-util
// or
$ yarn add @libyo/hexo-util
// or
$ pnpm add @libyo/hexo-util
```

## Usage

```js
const util = require('@libyo/hexo-util')
```

| Function name                              | Is RIIR |                                                                             Usage                                                                              | Is Rename                        |
| :----------------------------------------- | ------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: | -------------------------------- |
| `Cache()`                                  |      No |                                            [A simple plain object cache](https://github.com/hexojs/hexo-util#cache)                                            |                                  |
| `CacheStream()`                            |      No |                                     [Caches contents piped to the stream](https://github.com/hexojs/hexo-util#cachestream)                                     |                                  |
| `camelCaseKeys(obj, options)`              |      No |                                [Convert object keys to camelCase](https://github.com/hexojs/hexo-util#camelcasekeysobj-options)                                |                                  |
| `createSha1Hash()`                         |      No |                                         [Return SHA1 hash object](https://github.com/hexojs/hexo-util#createsha1hash)                                          |                                  |
| `decodeUrl(str)`                           |     Yes |                                         [Decode encoded URL or path](https://github.com/hexojs/hexo-util#decodeurlstr)                                         | `decodeURL` => `decodeUrl`       |
| `deepMerge(target, source)`                |      No |                      [Merges the enumerable properties of two objects deeply](https://github.com/hexojs/hexo-util#deepmergetarget-source)                      |                                  |
| `encodeUrl(str)`                           |     Yes |                                   [Encode URL or path into a safe format](https://github.com/hexojs/hexo-util#encodeurlstr)                                    | `encodeURL` => `encodeUrl`       |
| `escapeDiacritic(str)`                     |     Yes |                               [Escapes diacritic characters in a string](https://github.com/hexojs/hexo-util#escapediacriticstr)                               |                                  |
| `escapeHtml(str)`                          |     Yes |                                    [Escapes HTML entities in a string.](https://github.com/hexojs/hexo-util#escapehtmlstr)                                     | `escapeHTML` => `escapeHtml`     |
| `escapeRegExp(str)`                        |     Yes |                            [Escapes special characters in a regular expression](https://github.com/hexojs/hexo-util#escaperegexstr)                            | `escapeRegex` => `escapeRegExp`  |
| `full_url_for(path)`                       |      No |                               [Returns a url with the config.url prefixed](https://github.com/hexojs/hexo-util#full_url_forpath)                               | `full_url_for` => `fullUrlFor`   |
| `gravatar(str, [options])`                 |      No |                            [Returns the gravatar image url from an email](https://github.com/hexojs/hexo-util#gravatarstr-options)                             |                                  |
| `hash(str)`                                |      No |                                               [Generates SHA1 hash](https://github.com/hexojs/hexo-util#hashstr)                                               |                                  |
| `highlight(str, [options])`                |      No |                                [Syntax highlighting for a code block](https://github.com/hexojs/hexo-util#highlightstr-options)                                |                                  |
| `htmlTag(tag, attrs, text, escape)`        |      No |                                     [Creates a html tag](https://github.com/hexojs/hexo-util#htmltagtag-attrs-text-escape)                                     |                                  |
| `isExternalLink(url, sitehost, [exclude])` |     Yes | [Returns if a given url is external link relative to given `sitehost` and `[exclude]`](https://github.com/hexojs/hexo-util#isexternallinkurl-sitehost-exclude) |                                  |
| `Pattern(rule)`                            |      No |                         [Parses the string and tests if the string matches the rule](https://github.com/hexojs/hexo-util#patternrule)                          |                                  |
| `Permalink(rule, [options])`               |      No |                                        [Parses a permalink](https://github.com/hexojs/hexo-util#permalinkrule-options)                                         |                                  |
| `prettyUrls(url, [options])`               |     n/a |                                    [Rewrite urls to pretty URLs](https://github.com/hexojs/hexo-util#prettyurlsurl-options)                                    |                                  |
| `prismHighlight(str, [options])`           |      No |                      [Syntax highlighting for a code block using PrismJS](https://github.com/hexojs/hexo-util#prismhighlightstr-options)                       |                                  |
| `relativeUrl(from, to)`                    |      No |                              [Returns the relative URL from from to to](https://github.com/hexojs/hexo-util#relative_urlfrom-to)                               | `relative_url` => `relativeUrl`  |
| `slugize(str, [options])`                  |     Yes |                         [Transforms a string into a clean URL-friendly string](https://github.com/hexojs/hexo-util#slugizestr-options)                         |                                  |
| `spawn(command, [args], [options])`        |      No |                         [Launches a new process with the given command](https://github.com/hexojs/hexo-util#spawncommand-args-options)                         |                                  |
| `stripTags(str)`                           |     Yes |                                       [Removes HTML tags in a string](https://github.com/hexojs/hexo-util#striphtmlstr)                                        | `stripHTML` => `stripTags`       |
| `stripIndent(str)`                         |     Yes |                           [Strip leading whitespace from each line in a string](https://github.com/hexojs/hexo-util#stripindentstr)                            |                                  |
| `wordWrap(str, [options])`                 |     n/a |                             [Wraps the string no longer than line width](https://github.com/hexojs/hexo-util#wordwrapstr-options)                              |                                  |
| `tocObj(str, [options])`                   |     n/a |              [Generate a table of contents in JSON format based on the given html string](https://github.com/hexojs/hexo-util#tocobjstr-options)               |                                  |
| `truncate(str, [options])`                 |     n/a |              [Truncates a given text after a given length if text is longer than length](https://github.com/hexojs/hexo-util#truncatestr-options)              |                                  |
| `unescapeHtml(str)`                        |     Yes |                                   [Unescapes HTML entities in a string](https://github.com/hexojs/hexo-util#unescapehtmlstr)                                   | `unescapeHTML` => `unescapeHtml` |
| `urlFor(path, [option])`                   |      No |                              [Returns a url with the root path prefixed](https://github.com/hexojs/hexo-util#url_forpath-option)                               | `url_for` => `urlFor`            |

> **Note**
>
> [`full_url_for`, `url_for`, `relative_url` require `bind` or `call` to parse the user config when initializing](https://github.com/hexojs/hexo-util#bindhexo).

## Performance

See [benchmark](https://github.com/liby/hexo-util-rs/tree/main/benchmark) for benchmark code.

Hardware info:

```
System Version: macOS 12.4 (21F79)
Kernel Version: Darwin 21.5.0
Processor Name: 8-Core Intel Core i9
Processor Speed: 2.3 GHz
L2 Cache (per Core): 256 KB
L3 Cache: 16 MB![img.png](img.png)
Memory: 32 GB
```

Benchmark:

<details>
<summary>Strip HTML</summary>

```
❯ yarn bench
Running "mini fixture" suite...
Progress: 100%

  hexo-util-rs-buffer:
    1 343 399 ops/s, ±0.55%   | 12.9% slower

  hexo-util-rs:
    1 542 449 ops/s, ±0.44%   | fastest

  hexo-util:
    933 979 ops/s, ±1.30%     | 39.45% slower

  striptags:
    466 526 ops/s, ±1.55%     | 69.75% slower

  string-strip-html:
    13 805 ops/s, ±11.48%      | slowest, 99.1% slower

Finished 5 cases!
  Fastest: hexo-util-rs
  Slowest: string-strip-html
Running "large fixture" suite...
Progress: 100%

  hexo-util-rs-buffer:
    816 ops/s, ±2.62%   | fastest

  hexo-util-rs:
    631 ops/s, ±3.68%   | 22.67% slower

  hexo-util:
    285 ops/s, ±4.13%   | 65.07% slower

  striptags:
    141 ops/s, ±1.45%   | 82.72% slower

  string-strip-html:
    7 ops/s, ±8.74%     | slowest, 99.14% slower

Finished 5 cases!
  Fastest: hexo-util-rs-buffer
  Slowest: string-strip-html
```

</details>

<details>
<summary>Slugify</summary>

```
❯ yarn bench
Running "slugify and escape diacritic" suite...
Progress: 100%

  hexo-util-rs:
    1 104 153 ops/s, ±0.30%   | fastest

  hexo-util:
    255 709 ops/s, ±0.61%     | slowest, 76.84% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
```

</details>

<details>
<summary>isExternalLink</summary>

```
❯ yarn bench
Running "Internal absolute url" suite...
Progress: 100%

  hexo-util-rs:
    1 038 833 ops/s, ±0.37%   | fastest

  hexo-util:
    214 596 ops/s, ±0.30%     | slowest, 79.34% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "External absolute url" suite...
Progress: 100%

  hexo-util-rs:
    953 787 ops/s, ±0.41%   | fastest

  hexo-util:
    203 306 ops/s, ±0.45%   | slowest, 78.68% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "Relative absolute url" suite...
Progress: 100%

  hexo-util-rs:
    42 956 520 ops/s, ±0.87%   | fastest

  hexo-util:
    18 071 147 ops/s, ±0.63%   | slowest, 57.93% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
```

</details>

<details>
<summary>Encode URL</summary>

```
❯ yarn bench
Running "Encode URL - auth" suite...
Progress: 100%

  hexo-util-rs:
    1 299 520 ops/s, ±0.86%   | fastest

  hexo-util:
    255 364 ops/s, ±0.92%     | slowest, 80.35% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "Encode URL - Internationalized domain name" suite...
Progress: 100%

  hexo-util-rs:
    599 196 ops/s, ±0.87%   | fastest

  hexo-util:
    177 869 ops/s, ±1.89%   | slowest, 70.32% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "Encode URL - path with unicode" suite...
Progress: 100%

  hexo-util-rs:
    1 348 834 ops/s, ±1.38%   | fastest

  hexo-util:
    1 111 192 ops/s, ±7.06%   | slowest, 17.62% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
```

</details>

<details>
<summary>Decode URL</summary>

```
❯ yarn bench
Running "Decode URL - regular" suite...
Progress: 100%

  hexo-util-rs:
    1 632 744 ops/s, ±0.75%   | fastest

  hexo-util:
    272 866 ops/s, ±1.70%     | slowest, 83.29% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "Decode URL - path with space" suite...
Progress: 100%

  hexo-util-rs:
    2 630 212 ops/s, ±1.67%   | fastest

  hexo-util:
    1 959 248 ops/s, ±0.72%   | slowest, 25.51% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "Decode URL - space" suite...
Progress: 100%

  hexo-util-rs:
    1 228 376 ops/s, ±6.64%   | fastest

  hexo-util:
    239 213 ops/s, ±1.72%     | slowest, 80.53% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "Decode URL - hash and query" suite...
Progress: 100%

  hexo-util-rs:
    781 550 ops/s, ±1.90%   | fastest

  hexo-util:
    166 420 ops/s, ±1.78%   | slowest, 78.71% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "Decode URL - Internationalized domain name" suite...
Progress: 100%

  hexo-util-rs:
    492 862 ops/s, ±6.49%   | fastest

  hexo-util:
    155 205 ops/s, ±1.46%   | slowest, 68.51% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
```

</details>

<details>
<summary>Escape Diacritic</summary>

```
❯ yarn bench
Running "default" suite...
Progress: 100%

  hexo-util-rs:
    4 152 262 ops/s, ±1.20%   | fastest

  hexo-util:
    2 334 729 ops/s, ±1.62%   | slowest, 43.77% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
```

</details>

<details>
<summary>Unescape HTML</summary>

```
❯ yarn bench
Running "mini fixture" suite...
Progress: 100%

  hexo-util-rs-buffer:
    996 155 ops/s, ±1.41%     | 16.21% slower

  hexo-util-rs:
    1 188 802 ops/s, ±0.36%   | fastest

  hexo-util:
    677 794 ops/s, ±0.37%     | slowest, 42.99% slower

Finished 3 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "large fixture" suite...
Progress: 100%

  hexo-util-rs-buffer:
    30 402 ops/s, ±0.64%   | fastest

  hexo-util-rs:
    27 585 ops/s, ±1.81%   | 9.27% slower

  hexo-util:
    15 185 ops/s, ±0.58%   | slowest, 50.05% slower

Finished 3 cases!
  Fastest: hexo-util-rs-buffer
  Slowest: hexo-util
```

</details>

<details>
<summary>Escape HTML</summary>

```
❯ yarn bench
Running "mini fixture" suite...
Progress: 100%

  hexo-util-rs-buffer:
    1 406 688 ops/s, ±2.06%   | 30.15% slower

  hexo-util-rs:
    2 013 858 ops/s, ±0.73%   | fastest

  hexo-util:
    954 610 ops/s, ±0.40%     | slowest, 52.6% slower

Finished 3 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "large fixture" suite...
Progress: 100%

  hexo-util-rs-buffer:
    101 859 ops/s, ±1.56%   | fastest

  hexo-util-rs:
    96 883 ops/s, ±2.48%    | 4.89% slower

  hexo-util:
    32 949 ops/s, ±1.36%    | slowest, 67.65% slower

Finished 3 cases!
  Fastest: hexo-util-rs-buffer
  Slowest: hexo-util
```

</details>

<details>
<summary>Escape RegExp</summary>

```
❯ yarn bench
Running "default" suite...
Progress: 100%

  hexo-util-rs:
    4 833 899 ops/s, ±0.47%   | fastest

  hexo-util:
    3 128 195 ops/s, ±1.36%   | slowest, 35.29% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
```

</details>

<details>
<summary>Word Wrap </summary>

```
❯ yarn bench
Running "Word Wrap" suite...
Progress: 100%

  hexo-util:
    1 289 014 ops/s, ±0.41%   | slowest, 66.98% slower

  hexo-util-rs:
    3 903 226 ops/s, ±0.89%   | fastest

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
```

</details>


### My performance

Hardware info:

```
System Version: Windows 11 23H2
Processor Name: 13th Gen Intel(R) Core(TM) i5-13400F
Processor Speed: 2.5 GHz
L2 Cache: 9.5 MB
L3 Cache: 20 MB
Memory: 32 GB
node: v20.13.1
rustc: 1.79.0
```

Benchmark:

<details>
<summary>Strip HTML</summary>

```
❯ yarn bench
Running "mini fixture" suite...
Progress: 100%

  hexo-util-rs-buffer:
    2 290 439 ops/s, ±0.70%   | fastest

  hexo-util-rs:
    2 194 136 ops/s, ±1.13%   | 4.2% slower

  hexo-util:
    1 661 721 ops/s, ±2.02%   | 27.45% slower

  striptags:
    914 273 ops/s, ±0.61%     | 60.08% slower

  string-strip-html:
    34 237 ops/s, ±0.68%      | slowest, 98.51% slower

Finished 5 cases!
  Fastest: hexo-util-rs-buffer
  Slowest: string-strip-html
Running "large fixture" suite...
Progress: 100%

  hexo-util-rs-buffer:
    1 130 ops/s, ±0.90%   | fastest

  hexo-util-rs:
    852 ops/s, ±1.19%     | 24.6% slower

  hexo-util:
    367 ops/s, ±0.60%     | 67.52% slower

  striptags:
    231 ops/s, ±0.31%     | 79.56% slower

  string-strip-html:
    1 ops/s, ±1.40%       | slowest, 99.91% slower

Finished 5 cases!
  Fastest: hexo-util-rs-buffer
  Slowest: string-strip-html
```

</details>

<details>
<summary>Slugify</summary>

```
❯ yarn bench
Running "slugify and escape diacritic" suite...
Progress: 100%

  hexo-util-rs:
    1 513 805 ops/s, ±0.57%   | fastest

  hexo-util:
    371 613 ops/s, ±0.40%     | slowest, 75.45% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
```

</details>

<details>
<summary>isExternalLink</summary>

```
❯ yarn bench
Running "Internal absolute url" suite...
Progress: 100%

  hexo-util-rs:
    1 901 670 ops/s, ±0.40%   | slowest, 61.73% slower

  hexo-util:
    4 969 002 ops/s, ±0.62%   | fastest

Finished 2 cases!
  Fastest: hexo-util
  Slowest: hexo-util-rs
Running "External absolute url" suite...
Progress: 100%

  hexo-util-rs:
    1 816 194 ops/s, ±0.41%   | slowest, 60.79% slower

  hexo-util:
    4 632 289 ops/s, ±0.46%   | fastest

Finished 2 cases!
  Fastest: hexo-util
  Slowest: hexo-util-rs
Running "Relative absolute url" suite...
Progress: 100%

  hexo-util-rs:
    94 433 850 ops/s, ±0.69%   | fastest

  hexo-util:
    5 288 638 ops/s, ±0.50%    | slowest, 94.4% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
```

</details>

<details>
<summary>Encode URL</summary>

```
❯ yarn bench
Running "Encode URL - auth" suite...
Progress: 100%

  hexo-util-rs:
    2 440 901 ops/s, ±0.51%   | fastest

  hexo-util:
    429 317 ops/s, ±0.38%     | slowest, 82.41% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "Encode URL - Internationalized domain name" suite...
Progress: 100%

  hexo-util-rs:
    911 968 ops/s, ±0.46%   | fastest

  hexo-util:
    307 665 ops/s, ±0.59%   | slowest, 66.26% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "Encode URL - path with unicode" suite...
Progress: 100%

  hexo-util-rs:
    2 104 690 ops/s, ±0.38%   | fastest

  hexo-util:
    1 651 607 ops/s, ±0.42%   | slowest, 21.53% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
```

</details>

<details>
<summary>Decode URL</summary>

```
❯ yarn bench
Running "Decode URL - regular" suite...
Progress: 100%

  hexo-util-rs:
    2 773 648 ops/s, ±1.03%   | fastest

  hexo-util:
    589 285 ops/s, ±0.84%     | slowest, 78.75% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "Decode URL - path with space" suite...
Progress: 100%

  hexo-util-rs:
    3 380 141 ops/s, ±0.60%   | fastest

  hexo-util:
    2 263 874 ops/s, ±1.44%   | slowest, 33.02% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "Decode URL - space" suite...
Progress: 100%

  hexo-util-rs:
    2 198 707 ops/s, ±0.63%   | fastest

  hexo-util:
    508 571 ops/s, ±0.75%     | slowest, 76.87% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "Decode URL - hash and query" suite...
Progress: 100%

  hexo-util-rs:
    1 397 140 ops/s, ±0.66%   | fastest

  hexo-util:
    419 849 ops/s, ±0.40%     | slowest, 69.95% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "Decode URL - Internationalized domain name" suite...
Progress: 100%

  hexo-util-rs:
    823 011 ops/s, ±0.51%   | fastest

  hexo-util:
    323 652 ops/s, ±0.53%   | slowest, 60.67% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
```

</details>

<details>
<summary>Escape Diacritic</summary>

```
❯ yarn bench
Running "default" suite...
Progress: 100%

  hexo-util-rs:
    6 176 682 ops/s, ±0.39%   | fastest

  hexo-util:
    4 482 562 ops/s, ±0.67%   | slowest, 27.43% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
```

</details>

<details>
<summary>Unescape HTML</summary>

```
❯ yarn bench
Running "mini fixture" suite...
Progress: 100%

  hexo-util-rs-buffer:
    1 722 503 ops/s, ±0.43%   | 1.14% slower

  hexo-util-rs:
    1 742 336 ops/s, ±0.31%   | fastest

  hexo-util:
    1 107 416 ops/s, ±0.35%   | slowest, 36.44% slower

Finished 3 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "large fixture" suite...
Progress: 100%

  hexo-util-rs-buffer:
    47 329 ops/s, ±0.24%   | fastest

  hexo-util-rs:
    46 009 ops/s, ±0.50%   | 2.79% slower

  hexo-util:
    24 642 ops/s, ±0.53%   | slowest, 47.93% slower

Finished 3 cases!
  Fastest: hexo-util-rs-buffer
  Slowest: hexo-util
```

</details>

<details>
<summary>Escape HTML</summary>

```
❯ yarn bench
Running "mini fixture" suite...
Progress: 100%

  hexo-util-rs-buffer:
    2 889 588 ops/s, ±0.83%   | 10.76% slower

  hexo-util-rs:
    3 237 871 ops/s, ±0.33%   | fastest

  hexo-util:
    2 049 933 ops/s, ±0.33%   | slowest, 36.69% slower

Finished 3 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
Running "large fixture" suite...
Progress: 100%

  hexo-util-rs-buffer:
    198 797 ops/s, ±0.49%   | fastest

  hexo-util-rs:
    194 760 ops/s, ±0.34%   | 2.03% slower

  hexo-util:
    38 673 ops/s, ±0.44%    | slowest, 80.55% slower

Finished 3 cases!
  Fastest: hexo-util-rs-buffer
  Slowest: hexo-util
```

</details>

<details>
<summary>Escape RegExp</summary>

```
❯ yarn bench
Running "default" suite...
Progress: 100%

  hexo-util-rs:
    6 598 420 ops/s, ±0.56%   | fastest

  hexo-util:
    4 370 517 ops/s, ±0.38%   | slowest, 33.76% slower

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
```

</details>

<details>
<summary>Word Wrap </summary>

```
❯ yarn bench
Running "Word Wrap" suite...
Progress: 100%

  hexo-util:
    955 749 ops/s, ±0.45%     | slowest, 75.32% slower

  hexo-util-rs:
    3 872 860 ops/s, ±0.46%   | fastest

Finished 2 cases!
  Fastest: hexo-util-rs
  Slowest: hexo-util
```

</details>

## License

[MIT](https://github.com/liby/hexo-util-rs/blob/main/LICENSE)
