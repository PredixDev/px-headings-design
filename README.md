# Tables

The Predix Experience Headings module defines font sizes for base-level heading elements from `h1` through to `h6`. This module is a fork of the [inuitcss Headings module](https://github.com/inuitcss/base.headings).

## Dependencies

Px's Tables module depends on three other Px and inuitcss modules:

* [settings.defaults](https://github.com/inuitcss/settings.defaults)
* [tools.mixins](https://github.com/inuitcss/tools.mixins)
* [px-functions-design](https://github.sw.ge.com/pxc/px-functions-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.sw.ge.com/pxc/px-headings-design.git

Once installed, `@import` into your project's Sass file in its Base layer:

    @import "px-headings-design/sass/base.headings";

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('base.headings') { ... }

## Usage

The following font-size variables can be customized:

    $inuit-heading-size-1
    $inuit-heading-size-2
    $inuit-heading-size-3
    $inuit-heading-size-4
    $inuit-heading-size-5
    $inuit-heading-size-6
