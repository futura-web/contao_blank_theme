<?php

/**
 * 
 * Assemble single JS files into one
 *
 * @author Dinko Skopljak <ds@futura-web.de>
 * 
 * thanks Stefan Schulz-Lauterbach <ssl@clickpress.de> for the support
 * 
 **/

header('Content-type: text/javascript');

function buildFunctionCalls(string $functionName, array $arrJsPaths) {

    $strJS = false;

    foreach ($arrJsPaths[$functionName] as $value) {

        $param = (isset($value['param'])) ? $value['param'] : '';
        $strJS .=  "\t\t" . $value[0] . '(' . $param . ');' . "\n";
    }

    return $strJS;
}


function jsFunctions(){

    // get JS functions
    $arrJsPaths = [

        'base' => [
            ['contaoBasicVars'],
        ],
    
        'classes' => [
            ['contaoSliderClasses'],
            ['contaoSliderLazyLoadClass'],
            ['contaoModal'],
        ],

        'divers' => [
            ['safariSmoothScroll'],
        ],
    
        'ready' => [
            ['checkJS'],
            ['privacyNotice'],
            ['lazyLoadSetImgSizes'],
            ['lazyLoad'],
            ['lazyLoadGallery'],
            ['contaoSlider'],
            ['contaoGallery'],
            ['ajaxNewsFromURL'],
            ['ajaxNewsInModal'],
            ['menuInOut'],
        ],
    
        'scroll' => [
            ['toTop', 'param' => 'last_known_scroll_position'],
            ['parallaxSingleImg', 'param' => 'last_known_scroll_position'],
            ['textInSight', 'param' => 'last_known_scroll_position'],
        ],
    
        'loaded' => [
            ['fixedVid'],
            ['bodyLoaded'],
        ],
    ];

    $path = '../functions/js.%s.js';

    foreach ($arrJsPaths as $jsType) {
        foreach ($jsType as $value) {

            $fileName = $value[0];
            $filePath = sprintf($path, $fileName);
            
            // If file is not present, write from template
            if (!is_file($filePath)) {
                $template = 'function ' . $fileName . '(' . (isset($value['param'])) ?: $value['param'] . '){}';
                $file = fopen($filePath, 'w') or die('Can\'t write file');
                fwrite($file, $template);
                fclose($file);
            } 

            require_once $filePath;
        }
    }
    // call JS functions
    include_once('varsJS.php');

    echo $docReady, "\n";
    echo buildFunctionCalls('ready', $arrJsPaths);
    echo buildFunctionCalls('scroll', $arrJsPaths);
    echo $closeFunctionDocReady;

    echo $docOnload, "\n";
    echo buildFunctionCalls('loaded', $arrJsPaths);
    echo $closeFunctionDocOnload;

    echo $windowScroll, "\n";
    echo buildFunctionCalls('scroll', $arrJsPaths);
    echo $closeFunctionScrollWindow;
}