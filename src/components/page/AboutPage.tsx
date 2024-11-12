import logo from '../../assets/logo.png'
import {constant, memberteam} from "../../config/constant.ts";

export default function AboutPage() {
    return (
        <div className="bg-background text-foreground min-h-screen flex flex-col items-center py-10 px-4 font-mono">
            <div className="max-w-3xl w-full">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-2">{constant.ABOUT_US}</h1>
                    <p className="text-muted-foreground">{constant.ABOUT_US_DES}</p>
                </header>
                <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                    <img
                        src={logo}
                        alt="Placeholder image of the designer"
                        className="rounded-full border-4 border-border w-60 h-60 flex-shrink-0"
                    />
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">{constant.HELLO}</h2>
                        <p className="text-gray-600">
                            {constant.DESCRIPTION}
                        </p>
                    </div>
                </section>
                <section className="bg-accent text-accent-foreground p-6 rounded-lg mt-12 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Professional Background</h2>
                    <p className="text-gray-500 mb-4">
                        {constant.BACKGROUND}
                    </p>
                </section>
                <section className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">{constant.MEET}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {memberteam.map((m, index)=> (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={m.img}
                                    alt="Placeholder image of team member 1"
                                    className="rounded-full border-4 border-border w-36 h-36 mb-4"
                                />
                                <h3 className="text-xl font-semibold">{m.name}</h3>
                                <p className="text-muted-foreground text-center">{m.role}</p>
                                <p className="text-gray-500 text-center">{m.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}