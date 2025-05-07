This project implements a fullscreen application made with NW.js, Vite and Svelte 5.

This application is implemented in pure JavaScript, without using TypeScript at all.

The code indentation is made using spaces, not tabs.

The JavaScript code must apply the following coding standard rules :

-   Self-documenting code with clear explicit function and variable names.
-   Map identifiers are named using a singular compound nound suffixed with "Array" : productBySlugMap.
-   Array identifiers are named using a singular compound nound suffixed with "Array" : productCardArray.
-   Index variables are named using a singular compound nound suffixed with "Index" : productCardIndex.
-   Count variables are named using a singular compound nound suffixed with "Index" : productCardIndex.
-   Loops use properly named index variables, not single-letter variables like "i", "j", etc.
-   for ( ... of ... ) loops should be used to iterate on arrays instead of using .each().
-   4 spaces per block indent level.
-   The opening  `{` and closing `}` braces of a block are aligned vertically as in Allman style.
-   Use a brace block even if the block contains only one statement.
-   The "=>" operator ends its line.
-   A space around operators.
-   A space after a comma, a semi-colon, an opening bracket `[` and an opening parenthesis `(`.
-   A space before a closing bracket `]' and a closing parenthesis `)`.
-   No space between `[]` and `()`.
-   Pre-incrementations should be used instead of post-incrementations.
-   Function declarations should have parameters on separate lines.
-   Statements end with a semicolon.

The CSS code must apply the following coding standard rules :

-   4 spaces per block indent level.
-   The opening  `{` and closing `}` braces of a block are vertically aligned as in Allman style.
-   One selector per line.
-   All local CSS classes defined inside a Svelte component are prefixed by the component name written in kebab-case (FooterMenu.svelte => .footer-menu, .footer-menu-logo, .footer-menu-link, etc).

The HTML code is applying the following coding standard rules :

-   4 spaces per block indent level (including the content of `<script>` and `<style>` sections)

Here is sample code which show how to apply those rules to JavaScript code :

```
function IterateOnProducts(
    productArray
    )
{
    for ( let product of productArray )
    {
        ...
    }

    let productCount = productArray.length;

    for ( let productIndex = 0;
          productIndex < productCount;
          ++productIndex )
    {
        let product = productArray[ product_index ];

        if ( product.name = '...' )
        {
            ...
        }
        else
        {
            ...
        }

        ...
    }
}

onMount(
    () => 
    {
        ...
    }
    );
```

When the application starts, it loads the "data.json" file which contains all the data it needs to operate.
