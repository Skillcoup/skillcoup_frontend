import { http } from "./http-common.service";

const ANALYTICS_API_KEY = process.env.REACT_APP_AMPLITUDE_KEY;
const ANALYTICS_API_URI = 'https://api2.amplitude.com/2/httpapi';

export const logStaticPageView = (page, source) => {
  const payload = {
    api_key: ANALYTICS_API_KEY,
    events: [
      {
        user_id: 'staticpageview@skillcoup.com',
        event_type: page, //home_pageview, for_creators_pageview, about_us_pageview
        time: Date.now(),
        event_properties: {
          environment: 'Web',
          source: source, //source of traffic - direct, instagram, discord, etc if captured through utm_campaign
        },
      },
    ],
  };
  http(ANALYTICS_API_URI, payload, "POST");
};