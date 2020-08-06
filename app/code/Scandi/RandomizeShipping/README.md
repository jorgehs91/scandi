# Overview
Scandi_RandomizeShipping module functionality is represented by the following:
 - When the shipping page is loaded:
    - Two random input fields from address form are removed;
    - All address input labels are inverteds;
    - The next button leads to the cart page.

# Installation
## Composer Mehod
1. Run `composer require scandi/module-randomize-shipping` in your project directory.
2. Run `bin/magento setup:upgrade`.

## Zip Method (app/code) 
Also, you can insert the module files directly in the app/code directory, in Magento 2 installation.
1. Create the app/code/Scandi/RandomizeShipping directory.
2. Insert all files from zip inside this created directory.
