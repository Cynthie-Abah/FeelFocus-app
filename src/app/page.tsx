import { getAffirmations } from "@/_libs/api";

export default async function Home () {
    const data = await getAffirmations()
  console.log(data);
  
  return (
    <div className="flex flex-col gap-5 px-8">
     <h2 className="text-center"> HOMEPAGE </h2>
     <p>this is going to be an app that contains everything a girl need to organize her self and her works all while maintaining selfcare and love</p>
     <span className="italic text-gray-600">I am yet to style this page, bear with me 🙏</span>

        {/* Affirmation */}
         {/* At the end of a session, display a cute animation with a motivational affirmation */}
        <p className="text-center text-lg italic max-w-xs text-foreground/80">
          {`“${data.text}” 🌷`}
        </p>
    </div>
  );
}
