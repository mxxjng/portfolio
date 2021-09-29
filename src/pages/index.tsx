import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { useEffect } from "react";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="">
                <Layout>
                    <div className="max-w-7xl mx-auto px-4 ">
                        <div className="mt-20 max-w-3xl">
                            <p className="text-primary text-sm">MX SPORTS</p>
                            <h1 className="text-3xl md:text-6xl text-headline font-headline my-2 hl">
                                Professionalisieren Sie Ihre Speisekarte
                            </h1>
                            <p className="my-4 max-w-md mb-0 md:mb-12">
                                Mit dem Speisekarten Planer haben Sie die
                                Möglichkeit Ihren Kunden übersichtliche
                                Speisekarten anzubieten
                            </p>
                            <div>
                                <div className="mt-6 flex">
                                    <div className="mr-2">
                                        <Link href="/login">
                                            <Button color="secondary">
                                                Anmelden
                                            </Button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/register">
                                            <Button>Registrieren</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-20 max-w-3xl">
                            <p className="text-primary text-sm">MX SPORTS</p>
                            <h1 className="text-3xl md:text-6xl text-headline font-headline my-2 hl">
                                Professionalisieren Sie Ihre Speisekarte
                            </h1>
                            <p className="my-4 max-w-md mb-0 md:mb-12">
                                Mit dem Speisekarten Planer haben Sie die
                                Möglichkeit Ihren Kunden übersichtliche
                                Speisekarten anzubieten
                            </p>
                            <div>
                                <div className="mt-6 flex">
                                    <div className="mr-2">
                                        <Link href="/login">
                                            <Button color="secondary">
                                                Anmelden
                                            </Button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/register">
                                            <Button>Registrieren</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-20 max-w-3xl">
                            <p className="text-primary text-sm">MX SPORTS</p>
                            <h1 className="text-3xl md:text-6xl text-headline font-headline my-2 hl">
                                Professionalisieren Sie Ihre Speisekarte
                            </h1>
                            <p className="my-4 max-w-md mb-0 md:mb-12">
                                Mit dem Speisekarten Planer haben Sie die
                                Möglichkeit Ihren Kunden übersichtliche
                                Speisekarten anzubieten
                            </p>
                            <div>
                                <div className="mt-6 flex">
                                    <div className="mr-2">
                                        <Link href="/login">
                                            <Button color="secondary">
                                                Anmelden
                                            </Button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/register">
                                            <Button>Registrieren</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-20 max-w-3xl">
                            <p className="text-primary text-sm">MX SPORTS</p>
                            <h1 className="text-3xl md:text-6xl text-headline font-headline my-2 hl">
                                Professionalisieren Sie Ihre Speisekarte
                            </h1>
                            <p className="my-4 max-w-md mb-0 md:mb-12">
                                Mit dem Speisekarten Planer haben Sie die
                                Möglichkeit Ihren Kunden übersichtliche
                                Speisekarten anzubieten
                            </p>
                            <div>
                                <div className="mt-6 flex">
                                    <div className="mr-2">
                                        <Link href="/login">
                                            <Button color="secondary">
                                                Anmelden
                                            </Button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/register">
                                            <Button>Registrieren</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        </div>
    );
}
