'use client';

export default function Benefits() {
    return (
        <section className="container mx-auto p-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                {/* Grid Item 1 */}
                <div className="bg-white p-2 lg:p-4">
                    <h3 className="text-md lg:text-lg font-bold mb-2 lg:mb-4">Certified Deep Cleaning</h3>
                </div>
                
                {/* Grid Item 2 */}
                <div className="bg-white p-2 lg:p-4">
                    <h3 className="text-md lg:text-lg font-bold mb-2 lg:mb-4">Quick Online Booking</h3>
                </div>

                {/* Grid Item 3 */}
                <div className="bg-white p-2 lg:p-4">
                    <h3 className="text-md lg:text-lg font-bold mb-2 lg:mb-4">Safe Booking System</h3>
                </div>

                {/* Grid Item 4 */}
                <div className="bg-white p-2 lg:p-4">
                    <h3 className="text-md lg:text-lg font-bold mb-2 lg:mb-4">Trustworthy Professionals</h3>
                </div>
            </div>
        </section>
    );
}