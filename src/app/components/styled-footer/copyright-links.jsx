import React from "react";
import Link from "next/link";

const CopyrightLinks = ({ navigation }) => {
  const copyright_links = navigation?.data?.copyright_links || [];

  return (
    <div className={"flex gap-x-3 items-center"}>
      {copyright_links.map((link, idx) => {
        let href = link?.url ?? "";
        try {
          const { pathname: p, search, hash } = new URL(href);
          href = p + search + hash;
        } catch {
          // already relative
        }
        return (
          <React.Fragment key={idx}>
            <Link href={href} className="text-body-caption">
              {link?.text}
            </Link>
            {idx < copyright_links.length - 1 && (
              <div className="w-px h-3 bg-text-heading" />
            )}
          </React.Fragment>
        );
      })}
      <div className="hidden xl:block w-[1px] h-3 bg-text-heading" />
    </div>
  );
};

export default CopyrightLinks;
