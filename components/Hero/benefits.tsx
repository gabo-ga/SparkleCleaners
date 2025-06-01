'use client';

export default function Benefits() {
    return (
        <section className="container mx-auto p-4">
                <div className="grid grid-cols-2 gap-2">
                    {/* Grid Item 1 */}
                    <div className="bg-white p-2">
                        <h3 className="text-md font-bold mb-4">Certified Deep Cleaning</h3>
                    </div>
                    {/* Grid Item 2 */}
                    <div className="bg-white p-2">
                        <h3 className="text-md font-bold mb-4">Quick Online Booking</h3>
                    </div>

                    {/* Grid Item 3 */}
                    <div className="bg-white p-2">
                        <h3 className="text-md font-bold mb-4">Safe Booking System</h3>
                    </div>

                    {/* Grid Item 4 */}
                    <div className="bg-white p-2">
                        <h3 className="text-md font-bold mb-4">Trustworthy Professionals</h3>
                    </div>
                </div>
            </section>
    );
}