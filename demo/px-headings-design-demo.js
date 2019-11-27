/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-headings-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-headings-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-headings-design" description="Headings gives you base-level text sizes in the form of easy-to-apply classes along with styled heading classes. Use its classes to style H1-H6 heading tags or other text elements. These type sizes are loose multiples of 15px as a basic unit. The sizes and styles follow a typographic rhythm, which makes the sizing distinct and gives the visual hierarchy emphasis." layer="base" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-defaults-design&quot;,
    &quot;https://github.com/PredixDev/px-mixins-design&quot;
  ]" selected-options="{{selectedOptions}}">

<!-- 2: Set Options -->
<px-sass-doc-option slot="options" option-name="Options" choose-with="dropdown" choices="[
    &quot;page heading&quot;,
    &quot;section heading&quot;,
    &quot;subsection heading&quot;,
    &quot;label&quot;,
    &quot;value&quot;,
    &quot;alpha 75px&quot;,
    &quot;beta 60px&quot;,
    &quot;gamma 45px&quot;,
    &quot;delta 30px&quot;,
    &quot;epsilon 20px&quot;,
    &quot;regular 15px&quot;,
    &quot;zeta 12px&quot;
  ]" default-choice="page heading">
</px-sass-doc-option>

<!-- 3: Make HTML Demo -->
<section slot="demo-html">
<span class\$="{{headingClass}}">Text Sample</span>
</section>

<!-- 4: Set Import Slot -->
<section slot="import">
@import "px-headings-design/_base.headings.scss";
</section>

<section slot="usage">
The headings module exposes classes that set the size and/or type of your heading elements. Apply the class to your element and the styling will automatically happen.

<span class="epsilon">For example, this has an 'epsilon' class applied. You can create it like this:</span>

\`\`\`
<span class="epsilon">For example, this has an 'epsilon' class applied. You can create it like this:</span>
\`\`\`

<p class="u-mt++ u-mb-"> You can apply the headings classes to any tag. For example:</p>

<h6 class="zeta u-mt-">This h6 tag is styled using 'zeta'</h6>

\`\`\`
<h6 class="zeta">This paragraph is styled using 'zeta'</h6>
\`\`\`

(Note: There's a good accessibility case for doing this. Heading tags have meaning for screen readers and web scrapers, and you should avoid having multiple high-level heading tags that are only used for styling.)

<br>
### Here are all the heading classes available:

#### Sizing

\`.alpha\` <span class="u-ml--">Type Size 75px</span>

\`.beta\` <span class="u-ml--">Type Size 60px</span>

\`.gamma\` <span class="u-ml--">Type Size 45px</span>

\`.delta\` <span class="u-ml--">Type Size 30px </span>

\`.epsilon\` <span class="u-ml--">Type Size 20px </span>

\`.zeta\` <span class="u-ml--">Type Size 12px</span>

#### Type

\`.heading--page\` <span class="u-ml--">Type Page Heading</span>

\`.heading--section\` <span class="u-ml--">Type Section Heading</span>

\`.heading--subsection\` <span class="u-ml--">Type Sub-section Heading</span>

\`.label\` <span class="u-ml--">Type Label</span>

\`.value\` <span class="u-ml--">Type Value</span>



</section>

</px-sass-doc>
`,

  is: 'px-headings-design-demo',

  attached : function(){
    var boundHandler = this._handleOptionsUpdated.bind(this);
    this.addEventListener('px-sass-doc-options-updated', boundHandler)
  },

  detached : function(){
    this.removeEventListener('px-sass-doc-options-updated', boundHandler);
  },

  _handleOptionsUpdated : function(evt) {
    //call functions created below
    this.headingClass = this._headingClass();

    // Wait, then tell the highlighter to run after dom-if restamps
    this.async(function(){ this.fire('px-sass-doc-demo-updated', {}) }, 10);
  },

  _headingClass : function() {
    var opts = this.selectedOptions || {};

    if(opts.Options === "alpha 75px") return "alpha";
    if(opts.Options === "beta 60px") return "beta";
    if(opts.Options === "gamma 45px") return "gamma";
    if(opts.Options === "delta 30px") return "delta";
    if(opts.Options === "epsilon 20px") return "epsilon";
    if(opts.Options === "regular 15px") return "";
    if(opts.Options === "zeta 12px") return "zeta";

    if(opts.Options === "page heading") return "heading--page";
    if(opts.Options === "section heading") return "heading--section";
    if(opts.Options === "subsection heading") return "heading--subsection";
    if(opts.Options === "label") return "label";
    if(opts.Options === "value") return "value";
  }
});
