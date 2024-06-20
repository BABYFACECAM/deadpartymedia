import Image from "next/image";

const deadpartyData = {
  leftCover: {
    href: "https://open.spotify.com/playlist/5vy70T9WNmAz07HOY369qM?pi=1on5Pm3NTxCA1&pt=dcd940f72b407dd130188bf81c898bf6&si=wQc23boZQS6JAWQSCRZXtQ&utm_medium=share&utm_source=linktree",
    imgSrc:
      "https://y2pf5vl8vyp1ou8s.public.blob.vercel-storage.com/submit-music-here-1McHpyjePMKZy54V5VRTSPURsvUHha.png",
    title: "Submit Your Music Here!",
    description: "The link to our spotify playlist submission playlist",
    category: "Spotify",
  },
  boxNews: [
    {
      href: "https://open.spotify.com/playlist/7M5cpOGjtocwzI0xmcRmpa?si=e201f6edb8984eb9&utm_medium=share&utm_source=linktree",
      imgSrc:
        "https://y2pf5vl8vyp1ou8s.public.blob.vercel-storage.com/dead-party-media.png-WTNWdM12sPtnVAO8Dx3HyHwjG76tAN.webp",
      title: "The Arkansas Music Playlist",
      category: "Spotify",
    },
    {
      href: "https://open.spotify.com/playlist/3FoOF33zh3bkp5PjJgNzeH?go=1&sp_cid=84ba72c26b70d0f6df48177d6e88b700&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=bb571480ba2f4caa",
      imgSrc:
        "https://y2pf5vl8vyp1ou8s.public.blob.vercel-storage.com/house-party-playlist-TgQsTvclEjC66xrtQ9FzqxsC4XevL1.png",
      title: "The Arkansas Hip-Hop/R&B Playlist",
      category: "Spotify",
    },
    {
      href: "https://music.youtube.com/playlist?list=PL2Hlxfxp8jgIW8-09_6rDiBFCqlQZU9DV",
      imgSrc:
        "https://y2pf5vl8vyp1ou8s.public.blob.vercel-storage.com/deadparty-youtube-IgB6WxLy1edbWkEds2gub4p6dujX9u.png",
      title: "Dead Party Monthly ",
      category: "Youtube Music",
    },
    {
      href: "https://music.apple.com/us/playlist/the-dead-party-monthly-playlist/pl.u-4Jomaj3CJ8Mr348",
      imgSrc:
        "https://y2pf5vl8vyp1ou8s.public.blob.vercel-storage.com/dead-party-apple.png-acT98yeOIVBtlyEgRcTauBG4eiCnBD.webp",
      title: "Dead Party Monthly ",
      category: "Apple Music",
    },
  ],
};

export default function Hero() {
  return (
    <div className=" hero min-h-96 gap-4">
      <div className="hero-content space-x-6 flex-col lg:flex-row ">
        {/* Left Cover */}
        <div className="card max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1 glass">
          <div className="card-compact relative hover-img max-h-98 overflow-hidden bg-black">
            <a href={deadpartyData.leftCover.href}>
              <Image
                src={deadpartyData.leftCover.imgSrc}
                alt={`Picture of ${deadpartyData.leftCover.title}`}
                className="max-w-full w-full mx-auto h-auto"
                height={150}
                width={150}
              />
            </a>
            <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-to-t from-black to-transparent">
              <a href={deadpartyData.leftCover.href}></a>
              <div className="pt-2">
                <div className="text-gray-100">
                  <div className=" card-actions inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                  {deadpartyData.leftCover.category}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box News */}
        <div className="card card-normal gap-2 space-x-6 max-w-full w-full lg:w-1/2 glass">
          <div className="flex flex-row flex-wrap">
            {deadpartyData.boxNews.map((news, index) => (
              <article
                key={index}
                className="flex-shrink max-w-full w-full sm:w-1/2"
              >
                <div className="relative hover-img max-h-48 overflow-hidden">
                  <a href={news.href}>
                    <Image
                      className="max-w-full w-full mx-auto h-auto"
                      src={news.imgSrc}
                      alt={news.title}
                      width={100}
                      height={100}
                    />
                  </a>
                  <div className="card-body absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-to-t from-black to-transparent">
                    <a href={news.href}>
                      <h2 className=" card-title text-lg font-bold capitalize leading-tight text-white mb-1">
                        {news.title}
                      </h2>
                    </a>
                    <div className="pt-1">
                      <div className="text-gray-100">
                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                        {news.category}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
