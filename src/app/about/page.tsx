import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Layout>
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
            <Image
              alt="avatar"
              src="/me.jpg"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full xl:rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">Emmanuel Karibiye</h3>
            <div className="text-gray-500 dark:text-gray-400">Software Engineering Intern</div>
            <div className="text-gray-500 dark:text-gray-400">Jp Morgan Chase & Co.</div>
            <div className="flex flex-col pt-3">
              <a
                className="rounded-full border px-8 py-2 text-center text-sm font-light text-gray-700 transition-colors hover:border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white hover:shadow dark:text-white"
                href="https://www.linkedin.com/in/emmanuel-karibiye-509b9a1b3/"
                data-screen-name="@yellowdragoon1"
                target="_blank"
                rel="noreferrer noopener"
              >
                Say Hi!
              </a>
            </div>
          </div>

          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <p>
              <span>
                Hi, I’m Emmanuel Karibiye, a Software Engineer based in Dublin, Ireland. I’m passionate about many areas of Computer Science, especially Fullstack Development, Reinforcement Learning, and Game Development. I enjoy exploring how tech intersects with creativity and real world problems. My most recent role was as a Software engineering intern ensuring data intergrity at{" "}
                <a
                  className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://jpmorganchase.com/ie"
                >
                  Jp Morgan Chase & Co.
                </a>
              </span>
            </p>

            <hr className="my-6 border-t border-gray-300 dark:border-gray-700" />

            <p className="sm:block md:block lg:block">
            Outside of work, I’m really into fashion, music, and sports. I play both piano and guitar, and I never miss a chance to get out on the football pitch. These interests keep me balanced and constantly inspired in different ways.

            Right now, I’m in the early stages of developing an exciting new app idea. it’s still under wraps, but I’m looking forward to sharing more soon.
            </p>

            <hr className="my-6 border-t border-gray-300 dark:border-gray-700" />

            <p>
              If you'd like to work with me, feel free to reach out via any of my{" "}
              <a
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                href="/contact"
              >
                contacts.
              </a>
            </p>

            <hr className="my-6 border-t border-gray-300 dark:border-gray-700" />

            <p>
              This site is inspired by the following{" "}
              <a
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/pycoder2000/blog"
              >
                template
                <Image
                  src="https://ext.same-assets.com/3188895193/3611773576.svg"
                  alt="external link"
                  width={16}
                  height={16}
                  className="inline-block ml-1"
                />
              </a>{" "}
              by Parth Desai.
            </p>
          </div>
        </div>

        <div className="mt-10 md:pl-16">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Experience
            </h1>
          </div>
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">
            <div className="my-3">
              <div className="flex flex-row text-xl">
                <span className="text-gray-500 dark:text-gray-400">Software Engineering Intern | Data Integrity</span>{" "}
                <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>{" "}
                <span className="text-primary">
                  <a
                    className="company"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.jpmorganchase.com"
                  >
                    JP Morgan Chase & Co.
                  </a>
                </span>
              </div>
              <div>
                <div className="p-1 font-mono text-sm text-gray-400 dark:text-gray-600">
                  June 2024 - August 2024
                </div>
                <div className="p-2">
                  <div className="flex flex-row ">
                    <div className="mr-2 text-lg text-primary"> ‣</div>
                    <div className="text-gray-500 dark:text-gray-400">
                    Developed a back-end application using Java Springboot, Terraform, Docker and AWS to perform data validation
                    and quality checks
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="mr-2 text-lg text-primary"> ‣</div>
                    <div className="text-gray-500 dark:text-gray-400">
                    Developed a REST API using Springboot and MySQL to store the data
                    </div>
                  </div>
                  <div className="items-top flex flex-row">
                    <div className="mr-2 text-lg text-primary"> ‣</div>
                    <div className="text-gray-500 dark:text-gray-400">
                    Resolved complex bug issues regarding data quality and hence helped in maintaining the data security of 80
                    million+ clients worldwide
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
                ~~~
              </div>
            </div>

            <div className="my-3">
              <div className="flex flex-row text-xl">
                <span className="text-gray-500 dark:text-gray-400">Data Analyst Intern | Applications</span>{" "}
                <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>{" "}
                <span className="text-primary">
                  <a
                    className="company"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wuxibiologics.com"
                  >
                    Wuxi Biologics
                  </a>
                </span>
              </div>
              <div>
                <div className="p-1 font-mono text-sm text-gray-400 dark:text-gray-600">
                  Jan 2023 - September 2023
                </div>
                <div className="p-2">
                  <div className="flex flex-row ">
                    <div className="mr-2 text-lg text-primary"> ‣</div>
                    <div className="text-gray-500 dark:text-gray-400">
                    Performing data analytics and visualizations involving large amounts of data
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="mr-2 text-lg text-primary"> ‣</div>
                    <div className="text-gray-500 dark:text-gray-400">
                    Automated the creation of several dashboards to save time and improve efficiency in the team using R, python,
                    SQL, and Tableau
                    </div>
                  </div>
                  <div className="items-top flex flex-row">
                    <div className="mr-2 text-lg text-primary"> ‣</div>
                    <div className="text-gray-500 dark:text-gray-400">
                    Resolved database issues on Microsoft SQL involving 50k+ rows.
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
                ~~~
              </div>
            </div>
            
            <div className="my-3">
              <div className="flex flex-row text-xl">
                <span className="text-gray-500 dark:text-gray-400">Mechanical Engineering Intern | Design</span>{" "}
                <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>{" "}
                <span className="text-primary">
                  <a
                    className="company"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.silent-aire.com"
                  >
                    Silent Aire
                  </a>
                </span>
              </div>
              <div>
                <div className="p-1 font-mono text-sm text-gray-400 dark:text-gray-600">
                  July 2022 - September 2022
                </div>
                <div className="p-2">
                  <div className="flex flex-row ">
                    <div className="mr-2 text-lg text-primary"> ‣</div>
                    <div className="text-gray-500 dark:text-gray-400">
                    Carrying out pressure/Leak analysis on the doors and coming up with a design solution hence boosting its
efficiency
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="mr-2 text-lg text-primary"> ‣</div>
                    <div className="text-gray-500 dark:text-gray-400">
                    Designing plans and specifying dimensions to be followed in building HVAC systems for data centers.
                    </div>
                  </div>
                  <div className="items-top flex flex-row">
                    <div className="mr-2 text-lg text-primary"> ‣</div>
                    <div className="text-gray-500 dark:text-gray-400">
                    Observing and documenting the Standard operating procedures for each role involved in building our hyperscale
ventilation systems which may vary depending on the specifications of the customer
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
                ~~~
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
