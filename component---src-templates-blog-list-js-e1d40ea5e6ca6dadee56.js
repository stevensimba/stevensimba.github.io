(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{218:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));a(58),a(8);var r=a(0),n=a.n(r),l=a(45),s=a(215),o=a(216);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges,r=this.props.pageContext,c=r.currentPage,m=r.numPages,i=1===c,p=c===m,u=c-1==1?"/":(c-1).toString(),d=(c+1).toString();return n.a.createElement(s.a,null,n.a.createElement(o.a,{title:t,keywords:["blog","gatsby","javascript","react"]}),a.map((function(e){var t=e.node;return n.a.createElement("article",{className:"post",key:t.fields.slug},t.frontmatter.img&&t.frontmatter.img.childImageSharp&&t.frontmatter.img.childImageSharp.fluid&&n.a.createElement(l.Link,{to:t.fields.slug,className:"post-thumbnail",style:{backgroundImage:"url("+t.frontmatter.img.childImageSharp.fluid.src+")"}}),n.a.createElement("div",{className:"post-content"},n.a.createElement("h2",{className:"post-title"},n.a.createElement(l.Link,{to:t.fields.slug,className:"titles"},t.frontmatter.title)),n.a.createElement("p",null,t.excerpt),n.a.createElement("div",{className:"post-date-words"},n.a.createElement("span",{className:"post-date"},t.frontmatter.date,"  — "),n.a.createElement("span",{className:"post-words"},t.timeToRead," minute read"))))})),n.a.createElement("div",{className:"container"},n.a.createElement("nav",{className:"pagination",role:"pagination"},n.a.createElement("ul",null,!i&&n.a.createElement("p",null,n.a.createElement(l.Link,{to:u,rel:"prev",className:"newer-posts"},"← Previous Page")),n.a.createElement("p",null,n.a.createElement("span",{className:"page-number"},"Page ",c," of ",m)),!p&&n.a.createElement("p",null,n.a.createElement(l.Link,{to:d,rel:"next",className:"older-posts"},"Next Page →"))))))},r}(n.a.Component);t.default=c;var m="2560151971"}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-e1d40ea5e6ca6dadee56.js.map