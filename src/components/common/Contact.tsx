export default function Contact() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-card rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">Get in Touch</h2>
                <form action="#" method="POST" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-muted-foreground mb-1">Full Name</label>
                            <input type="text" id="name" name="name" required className="bg-input border border-border text-foreground p-3 rounded focus:ring focus:outline-none"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-muted-foreground mb-1">Email Address</label>
                            <input type="email" id="email" name="email" required className="bg-input border border-border text-foreground p-3 rounded focus:ring focus:outline-none"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-muted-foreground mb-1">Your Message</label>
                        <textarea id="message" name="message"  required className="bg-input border border-border text-foreground p-3 rounded focus:ring focus:outline-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary text-white p-3 rounded hover:bg-primary/80 transition-all duration-200 ease-in-out">Send Message</button>
                </form>
            </div>
        </div>


    )
}