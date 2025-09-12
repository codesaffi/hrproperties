import { Link } from "react-router-dom";
import img from "../assets/ceo.webp";
import img2 from "../assets/md.webp";
import { ChevronRight } from "lucide-react";

export default function CeoSection() {
  return (
    <>
      <div className="flex flex-col items-center w-full col-span-2 mb-6">
        {/* Section Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-blue-800 text-center mb-4 mt-8">
          CEO Message
        </h2>
        {/* Breadcrumb */}
        <div className="flex items-center justify-center text-xl md:text-2xl text-gray-600 mb-2">
          <Link to={"/"}>
            <span className="hover:underline cursor-pointer">Home</span>
          </Link>
          <ChevronRight className="w-5 h-5 mx-2 text-gray-500" />
          <span className="text-blue-800 font-medium">CEO Message</span>
        </div>
      </div>
      <section className="bg-white py-12">
        <div className="w-full px-2 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image (mobile-first order) */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={img} // put your CEO image here
              alt="CEO Zeeshan Shoukat"
              className="rounded-lg shadow-lg w-full md:w-[90%] object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-1 text-left">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-800 mb-8">
              Message from CEO
            </h2>
            <p className="text-gray-700 leading-relaxed text-xl md:text-2xl mb-6">
              Real estate is not just about land and buildings — it is about{" "}
              <span className="font-semibold text-blue-800">
                trust, vision, and the future we create together
              </span>
              . At HR Properties, we believe in offering more than just
              investments; we create opportunities for people to build their
              lives, their dreams, and their legacies.
            </p>

            <p className="text-gray-700 leading-relaxed text-2xl md:text-3xl mb-6">
              Our journey has been guided by one simple mission: to
              <span className="font-semibold text-blue-800">
                {" "}
                set new benchmarks in trust, transparency, and value-driven
                development.
              </span>
              We have always prioritized our clients’ interests, ensuring that
              every project reflects the highest standards of planning,
              infrastructure, and sustainability.
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
              Our CEO’s Commitment
            </h2>
            <p className="text-gray-700 leading-relaxed text-xl md:text-2xl mb-8">
              At HR Properties, our mission has always been to redefine real
              estate in Pakistan through trust, transparency, and value-driven
              development. As CEO, I am deeply committed to creating communities
              that not only provide homes but also ensure long-term investment
              security and lifestyle excellence. Every project we deliver is a
              reflection of our promise—LDA-approved, sustainable, and
              customer-focused—because we believe our clients deserve nothing
              less than the very best. Together, we are building more than just
              properties; we are shaping secure futures and thriving communities
              for generations to come. Our vision is to empower every client
              with confidence, security, and a sense of belonging in a thriving
              community. We strive to set new standards in the industry,
              ensuring that every development is a step toward a brighter, more
              sustainable future for all.
            </p>

            <p className="font-bold text-blue-900 text-3xl md:text-3xl mb-8">
              — Zeeshan Shoukat ( CEO HR Properties )
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-10">
            Our Vision Forward
          </h2>

          <p className="text-gray-700 leading-relaxed text-xl md:text-2xl mb-8">
            Under my leadership, HR Properties will continue to move forward
            with the same principles that define us:
            <span className="font-semibold text-blue-800">
              {" "}
              integrity, commitment, and excellence.
            </span>{" "}
            My vision is to see HR Properties grow into a symbol of reliability
            in Pakistan’s real estate sector, where investors, homeowners, and
            communities can feel confident that their futures are in safe hands.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-full px-2 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image (mobile-first order) */}
          <div className="order-1 md:order-1 flex justify-center">
            <img
              src={img2}
              alt="MD hassan amjad"
              className="rounded-lg shadow-lg w-full md:w-[90%] object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-2 text-left">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-800 mb-8">
              Message from the Managing Director
            </h2>
            <p className="text-gray-700 leading-relaxed text-xl md:text-2xl mb-6">
              At HR Properties, we strive to create projects that go beyond
              structures — developments that inspire{" "}
              <span className="font-semibold text-blue-800">
                trust, value, and reliability.
              </span>
              . My vision is to ensure that every step we take reflects our
              promise of{" "}
              <span className="font-semibold text-blue-800">
                excellence, transparency, and timely delivery.
              </span>
            </p>

            <p className="text-gray-700 leading-relaxed text-2xl md:text-3xl mb-6">
              We are committed to providing opportunities where families can
              build their futures and investors can find lasting security. With
              every project, we aim to strengthen HR Properties as a name
              synonymous with
              <span className="font-semibold text-blue-800">
                {" "}
                integrity and sustainable growth.
              </span>
            </p>

            <p className="font-bold text-blue-900 text-3xl md:text-3xl mb-8">
              — Hassan Amjad (Managing Director HR Properties)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
