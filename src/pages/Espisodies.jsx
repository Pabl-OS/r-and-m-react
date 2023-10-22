import React from 'react'
import {CardBody, CardHeader, Input, Pagination} from "@nextui-org/react";
import { SearchIcon } from '../components/Searchicon'
import {Card, CardFooter, Image} from "@nextui-org/react";
import { Link } from 'react-router-dom';

export const Espisodies = () => {
  return (
    <>
      <h2 className='md:px-8 px-2 mt-10 font-semibold  antialiased   mb-10 text-5xl'>Episodios</h2>
      <div className="flex justify-center" >
          <div className=" md:px-8 px-2 rounded-2xl flex justify-center items-center mt-12 text-white shadow-lg 2xl:w-1/2  lg:w-3/4 md:w-5/6 w-full">
          <Input
              label="Buscar"
              isClearable
              radius="lg"
              classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
              ],
              }}
              placeholder="Buscar por caracter..."
              startContent={
              <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
          />
          </div>
      </div>

      <div class="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-4 mt-3 flex justify-center">
            { [1].map((employee, index) => {
              return (
                <div className='mt-4'>
                  <Card className="py-4 m-auto  max-w-sm">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                          <p className="text-tiny uppercase font-bold">Character</p>
                          <h4 className="font-bold text-4xl text-large mt-2 mb-2 underline decoration-pink-500">Rick Sanchez</h4>
                          <small className="text-default-500">Earth</small>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                          <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            isZoomed
                            isBlurred
                            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"

                          />
                        </CardBody>
                        <CardFooter>
                      <Link
                        isExternal
                        showAnchorIcon
                        href="https://github.com/nextui-org/nextui"
                      >
                        Visit source code on GitHub.
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              )
            })
          }

      </div>

      <div className="flex  justify-center mt-8 gap-5">
        <Pagination
          total={10}
        />
      </div>
    </>
  )
}
