import {
  Html,
  Head,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface RecruiterEmailProps {
  recruiterName: string;
}

export default function RecruiterEmail({ recruiterName }: RecruiterEmailProps) {
  return (
    <Html lang="en">
      <Head>
        <title>Application for Full Stack Developer (Fresher)</title>
      </Head>

      <Preview>
        Fresher application – Full Stack Developer
      </Preview>

      <Section style={{ padding: "20px" }}>
        <Row>
          <Heading as="h2">Hello {recruiterName},</Heading>
        </Row>

        <Row>
          <Text>
            My name is <strong>Onkar</strong>, and I am a fresher applying for the
            <strong> Full Stack Developer</strong> role.
          </Text>
        </Row>

        <Row>
          <Text>
            I have a strong foundation in frontend and backend development and
            have worked on academic and personal projects using modern web
            technologies. I am eager to learn, grow, and contribute to a
            professional development team.
          </Text>
        </Row>

        <Row>
          <Text>
            I would really appreciate the opportunity to discuss how my skills
            and enthusiasm can add value to your organization.
          </Text>
        </Row>

        <Row>
          <Button
            href="public/Onkar_cv.pdf"
            style={{
              backgroundColor: "#2563eb",
              color: "#ffffff",
              padding: "10px 16px",
              borderRadius: "6px",
              textDecoration: "none",
              marginTop: "10px",
              display: "inline-block",
            }}
          >
            View Resume
          </Button>
        </Row>

        <Row>
          <Text style={{ marginTop: "20px" }}>
            Thank you for your time and consideration.
          </Text>
        </Row>

        <Row>
          <Text>
            Best regards,
            <br />
            <strong>Onkar</strong>
            <br />
            Full Stack Developer (Fresher)
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
