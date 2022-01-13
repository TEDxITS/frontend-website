import * as React from "react";

import Header from "@/components/layout/Header";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle="Sandbox" />

      <main className="bg-cdark text-clight / pt-8 md:pt-16">
        <Header />
        <section>
          <div className="layout / flex flex-col justify-center items-center min-h-screen text-center">
            <h1 className="mt-4">TEDxITS 2022</h1>
            <p className="mt-2 text-sm">A starter configuration project</p>

            <div className="mt-16 w-full">
              <ul className="flex flex-col gap-8">
                <h2 className="text-primary-300">
                  Sandbox{" "}
                  <span className="text-lg font-semibold">for the website</span>
                </h2>
                <hr />
                <li>
                  <div>
                    00. Font Type
                    <p>
                      use{" "}
                      <span className="px-2 py-1 bg-primary-300">
                        font-fivo
                      </span>{" "}
                      <span className="font-fivo">for this font</span>
                    </p>
                    <p>
                      use{" "}
                      <span className="px-2 py-1 bg-primary-300">
                        font-pilow
                      </span>{" "}
                      <span className="font-pilow">for this font</span>
                    </p>
                    <p>
                      use{" "}
                      <span className="px-2 py-1 bg-primary-300">
                        font-lucki
                      </span>{" "}
                      <span className="font-lucki">for this font</span>
                    </p>
                    <p>
                      use{" "}
                      <span className="px-2 py-1 bg-primary-300">
                        font-sympath
                      </span>{" "}
                      <span className="font-sympath">for this font</span>
                    </p>
                  </div>
                </li>
                <hr />
                <li>
                  01. Typography
                  <h1>
                    This is a{" "}
                    <span className="font-outline-900-sm md:font-outline-900-md">
                      Main title
                    </span>
                  </h1>
                  <h2>
                    This is a smaller{" "}
                    <span className="font-outline-900-sm md:font-outline-900-md">
                      Main title
                    </span>
                  </h2>
                  <h3>This is big subtitle</h3>
                  <h4>This is smaller subtitle</h4>
                  <p className="heading">This is Heading</p>
                  <p className="content">This is content</p>
                </li>
                <hr />
                <li>
                  02. Color Palette
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <p className="heading">Main color</p>
                      <div className="p-4 w-full bg-primary-100 border-2 border-primary-100 shadow-xl">
                        primary-100
                      </div>
                      <div className="p-4 w-full bg-primary-200 border-2 border-primary-100 shadow-xl">
                        primary-200
                      </div>
                      <div className="p-4 w-full bg-primary-300 border-2 border-primary-100 shadow-xl">
                        primary-300
                      </div>
                      <div className="p-4 w-full bg-primary-400 border-2 border-primary-100 shadow-xl">
                        primary-400
                      </div>
                      <div className="p-4 w-full bg-primary-500 border-2 border-primary-100 shadow-xl">
                        primary-500
                      </div>
                      <div className="p-4 w-full text-primary-100 bg-primary-600 border-2 border-primary-100 shadow-xl">
                        primary-600
                      </div>
                      <div className="p-4 w-full text-primary-100 bg-primary-700 border-2 border-primary-100 shadow-xl">
                        primary-700{" "}
                      </div>
                      <div className="p-4 w-full text-primary-100 bg-primary-800 border-2 border-primary-100 shadow-xl">
                        primary-800
                      </div>
                      <div className="p-4 w-full text-primary-100 bg-primary-900 border-2 border-primary-100 shadow-xl">
                        primary-900
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="heading">Accent Color</p>
                      <div className="bg-cdark / p-4 w-full border-2 border-primary-100 shadow-xl">
                        bg-cdark
                      </div>
                      <div className="bg-clight text-cdark / p-4 w-full border-2 border-primary-100 shadow-xl">
                        bg-clight
                      </div>
                      <div className="bg-cgreen / p-4 w-full border-2 border-primary-100 shadow-xl">
                        bg-cgreen
                      </div>
                      <div className="bg-cblue / p-4 w-full border-2 border-primary-100 shadow-xl">
                        bg-cblue
                      </div>

                      <div className="bg-cyellow text-cdark / p-4 w-full border-2 border-primary-100 shadow-xl">
                        bg-cyellow
                      </div>
                      <div className="bg-cpurple / p-4 w-full border-2 border-primary-100 shadow-xl">
                        bg-cpurple
                      </div>
                      <div className="bg-cpink text-cdark / p-4 w-full border-2 border-primary-100 shadow-xl">
                        bg-cpink
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <footer className="mt-16">
              © {new Date().getFullYear()} By TEDxITS 2022 Dev Team
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
