"use client";

import {
  EmailIcon,
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
  TelegramIcon,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Share() {
  const shareUrl = "https://isfvert.fr";
  const title =
    "Calculer votre ISF vert : Outil en ligne pour estimer votre impôt écologique en France";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="inline-flex mt-4 md:mt-0 items-center rounded-full py-3 px-6 justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground">
          Je partage à mes amis riches{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
          <span className="sr-only">Partage</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 rounded-xl mt-4">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Partager</h4>
            <p className="text-sm text-muted-foreground">
              Je partage à mes amis riches pour gagner des points de karma
            </p>
          </div>
          <div>
            <div className="flex gap-x-2">
              <div className="Demo__some-network">
                <FacebookShareButton
                  url={shareUrl}
                  quote={title}
                  className="Demo__some-network__share-button"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </div>

              <div className="Demo__some-network">
                <TwitterShareButton
                  url={shareUrl}
                  title={title}
                  className="Demo__some-network__share-button"
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </div>

              <div className="Demo__some-network">
                <TelegramShareButton
                  url={shareUrl}
                  title={title}
                  className="Demo__some-network__share-button"
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
              </div>

              <div className="Demo__some-network">
                <WhatsappShareButton
                  url={shareUrl}
                  title={title}
                  separator=":: "
                  className="Demo__some-network__share-button"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>

              <div className="Demo__some-network">
                <LinkedinShareButton
                  url={shareUrl}
                  className="Demo__some-network__share-button"
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>

              <div className="Demo__some-network">
                <EmailShareButton
                  url={shareUrl}
                  subject={title}
                  body="J'ai découvert un super site pour calculer son ISF Vert volontaire"
                  className="Demo__some-network__share-button"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default Share;
