import CustomImage from "@/components/blog/CustomImage";
import CustomVideo from "@/components/blog/CustomVideo";
import { slugify } from "@/utils/slugify";
import Link from "next/link";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const MDXcomponents = {
  Link,
  CustomImage,
  CustomVideo,
  h2: (props) => {
    const text =
      typeof props.children === "string"
        ? props.children
        : props.children.props.children;
    return (
      <Link className="no-underline" href={`#${slugify(text)}`}>
        <h2 className="heading" id={slugify(text)} {...props} />
      </Link>
    );
  },
  h3: (props) => {
    const text =
      typeof props.children === "string"
        ? props.children
        : props.children.props.children;
    return (
      <Link className="no-underline" href={`#${slugify(text)}`}>
        <h3 className="heading" id={slugify(text)} {...props} />
      </Link>
    );
  },
  pre: (props) => (
    <SyntaxHighlighter
      language={props.children.props.className.split("-")[1]}
      style={dracula}
      className="rounded-lg !p-6 !pl-3"
      showLineNumbers
    >
      {props.children.props.children}
    </SyntaxHighlighter>
  ),
  code: (props) => (
    <code
      className="bg-[#282a36] text-[#f1fa8c] rounded px-2 py-1 text-sm"
      {...props}
    ></code>
  ),
};

export default MDXcomponents;
