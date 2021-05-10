import {
  HTML,
  CSS,
  JS,
  PHP,
  SQL,
  DJANGO,
  REACT,
  NODE,
  TS,
  GRAPHQL,
  MONGODB,
  EXPRESS,
  TAILWINDCSS,
  FIREBASE,
} from "./svg/badges";
import React from "react";
import Tippy from "@tippyjs/react";

const badgeClassName = "mt-1 mr-1 float-right";
export const badgeIdentifiers = {
  html: (
    <Tippy key={Math.floor(Math.random() * 10000)} content="HTML">
      <span className={badgeClassName}>
        <HTML />
      </span>
    </Tippy>
  ),
  css: (
    <Tippy key={Math.floor(Math.random() * 10000)} content="CSS">
      <span className={badgeClassName}>
        <CSS />
      </span>
    </Tippy>
  ),
  js: (
    <Tippy key={Math.floor(Math.random() * 10000)} content="JavaScript">
      <span className={badgeClassName}>
        <JS />
      </span>
    </Tippy>
  ),
  php: (
    <Tippy key={Math.floor(Math.random() * 10000)} content="PHP">
      <span className={badgeClassName}>
        <PHP />
      </span>
    </Tippy>
  ),
  sql: (
    <Tippy key={Math.floor(Math.random() * 10000)} content="SQL">
      <span className={badgeClassName}>
        <SQL />
      </span>
    </Tippy>
  ),
  django: (
    <Tippy key={Math.floor(Math.random() * 10000)} content="Django">
      <span className={badgeClassName}>
        <DJANGO />
      </span>
    </Tippy>
  ),
  react: (
    <Tippy key={Math.floor(Math.random() * 10000)} content="React">
      <span className={badgeClassName}>
        <REACT />
      </span>
    </Tippy>
  ),
  node: (
    <Tippy key={Math.floor(Math.random() * 10000)} content="Node.js">
      <span className={badgeClassName}>
        <NODE />
      </span>
    </Tippy>
  ),
  ts: (
    <Tippy key={Math.floor(Math.random() * 10000)} content="TypeScript">
      <span className={badgeClassName}>
        <TS />
      </span>
    </Tippy>
  ),
  graphql: (
    <Tippy key={Math.floor(Math.random() * 10000)} content="GraphQL">
      <span className={badgeClassName}>
        <GRAPHQL />
      </span>
    </Tippy>
  ),
  mongodb: (
    <Tippy key={Math.floor(Math.random() * 10000)} content="MongoDB">
      <span className={badgeClassName}>
        <MONGODB />
      </span>
    </Tippy>
  ),
  express: (
    <Tippy key={Math.floor(Math.random() * 10000)} content="Express">
      <span className={badgeClassName}>
        <EXPRESS />
      </span>
    </Tippy>
  ),
  tailwindcss: (
    <Tippy key={Math.floor(Math.random() * 10000)} content="TailwindCSS">
      <span className={badgeClassName}>
        <TAILWINDCSS />
      </span>
    </Tippy>
  ),
  firebase: (
    <Tippy key={Math.floor(Math.random() * 10000)} content="Firebase">
      <span className={badgeClassName}>
        <FIREBASE />
      </span>
    </Tippy>
  ),
};
