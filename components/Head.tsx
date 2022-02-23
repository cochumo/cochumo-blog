import NextHead from "next/head";
import { SITE_NAME, DEFAULT_DESCRIPTION } from "../constants/siteConstant";

const Head = ({ title = "", description = "", ogImageUrl = "" }) => {
  return (
    <NextHead>
      <title>{title ? `${title}｜${SITE_NAME}` : SITE_NAME} </title>
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
