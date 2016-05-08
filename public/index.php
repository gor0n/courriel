<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Courriel</title>
    <meta name="description" content="A responsive email framework">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,100,300,700" />

    <!-- CSS -->
    <style>
      body {
        margin : 0;
        font-family: 'Lato', Helvetica, sans-serif;
        line-height: 1.5;
        text-align: center;
      }

      h1 {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        width: 100%;
        margin: 0;
        font-size: 3.75rem;
        font-weight: 300;
        color: #b5b7b6;
      }

      h1 small {
        display: block;
        font-size: 40%;
      }

      .template__group {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 2.5em 1.25em;
        box-sizing: border-box;
        text-align: center;
      }

      .template__link {
        display: inline-block;
        margin-left: 1em;
        font-size: .75em;
        color: #455a64;
        text-decoration: none;
      }

      .template__link:hover {
        text-decoration: underline;
      }
    </style>

  </head>

  <body class="l-home">
    <h1>Courriel <small>reponsive email framework</small></h1>
    <div class="template__group">
      <?php
        if ($handle = opendir('./templates')) {
          while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != ".." && $entry != "img") {
              echo '<a href="templates/'.$entry.'" class="template__link" target="_blank">Link to '.array_shift(explode(".", $entry)).'</a>';
            }
          }
          closedir($handle);
        }
      ?>
    </div>
  </body>
</html>
