import {
  Ban,
  CircleEllipsis,
  Megaphone,
  MousePointerClick,
  Newspaper,
  Radio,
  Search,
  Tv,
} from "lucide-react";
import { useFormikContext } from "formik";
import ChannelOption from "../channel-option";
import StepActions from "../step-actions";
import StepShell from "../step-shell";

const channels = [
  { label: "Facebook Ads", value: "Facebook Ads", icon: MousePointerClick },
  { label: "Google Adwords", value: "Google Adwords", icon: Megaphone },
  { label: "SEO", value: "SEO", icon: Search },
  { label: "Television", value: "Television", icon: Tv },
  { label: "Radio", value: "Radio", icon: Radio },
  { label: "Newspaper/Print", value: "Newspaper/Print", icon: Newspaper },
  { label: "Other", value: "Other", icon: CircleEllipsis },
  { label: "None", value: "None", icon: Ban },
];

const MarketingChannelsStep = ({ onContinue }) => {
  const { values, setFieldValue } = useFormikContext();
  const selectedChannels = values.marketingChannels || [];

  const toggleChannel = (value) => {
    if (value === "None") {
      setFieldValue(
        "marketingChannels",
        selectedChannels.includes("None") ? [] : ["None"],
      );
      return;
    }

    const withoutNone = selectedChannels.filter(
      (channel) => channel !== "None",
    );
    const nextChannels = withoutNone.includes(value)
      ? withoutNone.filter((channel) => channel !== value)
      : [...withoutNone, value];

    setFieldValue("marketingChannels", nextChannels);
  };

  return (
    <StepShell
      title="Great! What are your go to marketing channels in priority order?"
      description="(Select more than one if applicable)"
      bodyMaxW={false}
    >
      <div className="mx-auto grid max-w-[1080px] grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-y-16">
        {channels.map((channel) => (
          <ChannelOption
            key={channel.value}
            icon={channel.icon}
            label={channel.label}
            selected={selectedChannels.includes(channel.value)}
            onClick={() => toggleChannel(channel.value)}
          />
        ))}
      </div>
      <StepActions onContinue={onContinue} className={"max-w-[414px]!"} />
    </StepShell>
  );
};

export default MarketingChannelsStep;
