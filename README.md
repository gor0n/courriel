# **Courriel** #

A responsive email framework with modern tools including sass, a grid and a build system to quickly craft responsive emails.

## Supported email clients ##

- Outlook (2003/2007/2010/2011/2013/2016)
- Outlook.com
- Gmail
- Yahoo! Mail
- Apple Mail (7/8)
- Native iPhone client (tested on iOS 7/8/9)

Tested on [Litmus](https://litmus.com/)

## Getting started ##

You need to have `node` and `gulp` installed. If you have them, you just need to run this task.
```
  npm install
```
It will install nodejs dependencies then run `gulp` to generate files in public directory.

## Structure ##

```
|
|-- frontend/
|  |-- build/
|  |  |-- configs/
|  |  |-- tasks/
|  |-- images/
|  |-- snippets/
|  |-- styles/
|  |  |-- base/
|  |  |-- project/
|  |  |-- styles.scss
|  |-- templates/ (where we build templates)
|  |  |-- template.html
|-- public/
|  |-- templates/
|  |  |-- img/ (optimized images)
|  |  |-- template.html (generated templates with inline css)
|  |-- index.php (with links to all templates found in templates directory)
|
```

## Grid system ##

By default the grid is a 12 columns grids but you can change it in SASS variables. The grid system uses attributes to control columns.

You have to declare how many grid blocks you have in a row with `grid="2"` then specify their sizes on each of them with something like `grid-col="6" grid-col-sm="12"`.

#### Example for two columns row ####

```
<table class="l-row l-spacing" grid="2">
  <tr>
    <td grid-col="6" grid-col-sm="12">
      <table>
        <tr>
          <td>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </td>
        </tr>
      </table>
    </td>
    <td grid-col="6" grid-col-sm="12">
      <table>
        <tr>
          <td>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```
If the container size is set to 600px (default), we'll have two columns above 600px and 1 column below.

You'll find more examples in [frontend/templates/template.html](https://bitbucket.org/gor0n/courriel/src/3343464fd77596d1a1575089b99e03ba412a37c0/frontend/templates/template.html?at=master&fileviewer=file-view-default) and code snippets in [frontend/snippets](https://bitbucket.org/gor0n/courriel/src/3343464fd77596d1a1575089b99e03ba412a37c0/frontend/snippets/?at=master).

## Layout helpers ##

#### `.l-spacing` ####
Add this class on a row to add padding between columns and between rows.

#### `.l-spacing-row` ####
Add this class on a row to add padding between rows only.

#### `.l-spacing-columns` ####
Add this class on a row to add padding between columns only.

#### `.l-expander` ####
Add an empty cell with this class to force your column to be full-width when you don't have enough content.

## Build system ##

Gulp configs and individual tasks are located in build folder.

This build system is including support for `notifications` and `livereload`.

#### Bundle Tasks

Task Name     | Description
------------- | -----------------------------------------------------
`default`     | Run images then styles, templates and styles:clean
`watch`       | Watch IMG, CSS and JS files
`live`        | Watch files and enable livereload (you need to have [livereload browser extension](http://livereload.com/extensions/))

#### Individual Tasks

Task Name     | Description
------------- | ----------------------------------------------------
`images`      | Copy and optimize images
`styles`      | Compile SASS
`template`    | Inline CSS into templates then inject media queries on top of it
`styles:clean`| Clean generated CSS files after template task

## Copyright ##

The MIT License (MIT) Copyright © 2016 Vivian Verswyvel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
