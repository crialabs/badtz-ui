import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import * as React from "react";

interface NewsletterWelcomeProps {
  unsubscribeLink: string;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL
  ? `${process.env.NEXT_PUBLIC_APP_URL}`
  : "";

export const NewsletterWelcome: React.FC<NewsletterWelcomeProps> = ({
  unsubscribeLink,
}) => (
  <Html>
    <Head />
    <Preview>Join my learning journey 🛠️</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://cdn.badtz-ui.com/mail-assets/bui-logo.png"
          width="42"
          height="42"
          alt="BadtzUI"
          style={logo}
        />
        <Heading style={heading}>Let's Build & Learn Together 🚀</Heading>

        <Text style={paragraph}>
          <em>"Why this newsletter?"</em> Because SaaS building is better with
          companions. I'm sharing{" "}
          <span style={{ color: "#ffffff" }}>real-world experiments</span>, not
          theory - screwups included. Consider this our shared lab notebook.
        </Text>

        <Text style={paragraph}>What's in store for us:</Text>

        <Section>
          <Text style={paragraph}>
            🚀 <strong>Live Launches</strong> - New apps, real feedback
          </Text>
          <Text style={paragraph}>
            🤦 <strong>Oops Moments</strong> - My fails = your lessons
          </Text>
          <Text style={paragraph}>
            🧪 <strong>Workshop Diaries</strong> - Code with me live
          </Text>
          <Text style={paragraph}>
            💡 <strong>Found Gems</strong> - Tools/tips that save hours
          </Text>
        </Section>

        <Text style={paragraph}>
          You get my unfiltered playbook. Take what works, skip what doesn't -
          <span style={{ color: "#ffffff" }}>
            {" "}
            let's become better builders together
          </span>
          .
        </Text>

        <Hr style={hr} />

        <Text style={paragraph}>
          Changed your mind? No hard feelings:{" "}
          <Link
            href={`${unsubscribeLink}`}
            style={{
              color: "#3b82f6",
              textDecoration: "underline",
            }}
          >
            Unsubscribe
          </Link>
        </Text>

        <Text style={paragraph}>
          To embracing the grind,
          <br />
          Badtz
        </Text>
      </Container>
    </Body>
  </Html>
);

const logo = {
  width: 42,
  height: 42,
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  background: "#09090b",
  margin: "0 auto",
  padding: "20px 20px 48px 20px",
  maxWidth: "560px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "500",
  color: "#ffffff",
  padding: "17px 0 0",
};

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#A1A1AA",
};

const buttonContainer = {
  padding: "27px 0 27px",
};

const button = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  fontWeight: "600",
  color: "#09090b",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "11px 23px",
};

const hr = {
  borderColor: "#A1A1AA50",
  margin: "42px 0 26px",
};
