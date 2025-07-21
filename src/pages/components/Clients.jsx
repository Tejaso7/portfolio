const logos = [
  {
    name: "Google",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Netflix",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
  },
  {
    name: "Amazon",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Spotify",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    name: "Slack",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
  },
  {
    name: "Airbnb",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  },
  {
    name: "Adobe",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Corporate_Logo.png",
  },
];

const Clients = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background px-4">
      <div className="max-w-6xl w-full">
        <p className="text-center text-xl font-medium text-foreground">
          More than 2.2 million companies worldwide already trust us
        </p>
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="border border-dashed border-muted p-6 sm:p-10 rounded flex items-center justify-center bg-muted/20"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
