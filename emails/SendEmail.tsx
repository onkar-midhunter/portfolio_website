import {
  Html,
  Head,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
  Hr,
  Link,
} from "@react-email/components";

interface RecruiterEmailProps {
  recruiterName: string;
}

export default function RecruiterEmail({ recruiterName }: RecruiterEmailProps) {
  return (
    <Html lang="en">
      <Head>
        <title>Onkar Khedekar - Full Stack Developer Application</title>
      </Head>

      <Preview>
        Full Stack Developer Application - Onkar Khedekar
      </Preview>

      <Section style={{ padding: "30px", backgroundColor: "#f9fafb" }}>
        {/* Header */}
        <Section style={{ 
          backgroundColor: "#ffffff", 
          borderRadius: "8px", 
          padding: "30px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
        }}>
          <Row>
            <Heading as="h2" style={{ color: "#1f2937", marginBottom: "10px" }}>
              Hello {recruiterName},
            </Heading>
          </Row>

          <Row>
            <Text style={{ color: "#4b5563", fontSize: "16px", lineHeight: "1.6" }}>
              My name is <strong>Onkar Khedekar</strong>, and I am a passionate fresher 
              applying for the <strong>Full Stack Developer</strong> position.
            </Text>
          </Row>

          <Row>
            <Text style={{ color: "#4b5563", fontSize: "16px", lineHeight: "1.6" }}>
              I have a strong foundation in both frontend and backend development, 
              with hands-on experience in modern web technologies including React, 
              Next.js, Node.js, and MongoDB. Through academic and personal projects, 
              I have developed practical skills in building responsive, user-friendly 
              applications.
            </Text>
          </Row>

          <Row>
            <Text style={{ color: "#4b5563", fontSize: "16px", lineHeight: "1.6" }}>
              I am eager to learn, grow, and contribute to a professional development 
              team. I would really appreciate the opportunity to discuss how my skills, 
              enthusiasm, and dedication can add value to your organization.
            </Text>
          </Row>

          <Hr style={{ margin: "24px 0", borderColor: "#e5e7eb" }} />

          {/* Contact Information */}
          <Row>
            <Text style={{ color: "#1f2937", fontSize: "16px", fontWeight: "600", marginBottom: "12px" }}>
              📧 Contact Information:
            </Text>
          </Row>

          <Row>
            <Text style={{ color: "#4b5563", fontSize: "15px", lineHeight: "1.8", margin: "0" }}>
              <strong>Email:</strong>{" "}
              <Link 
                href="mailto:khedekar679@gmail.com" 
                style={{ color: "#2563eb", textDecoration: "none" }}
              >
                khedekar679@gmail.com
              </Link>
            </Text>
          </Row>

          <Row>
            <Text style={{ color: "#4b5563", fontSize: "15px", lineHeight: "1.8", margin: "0" }}>
              <strong>LinkedIn:</strong>{" "}
              <Link 
                href="https://www.linkedin.com/in/onkar-khedekar" 
                style={{ color: "#2563eb", textDecoration: "none" }}
              >
                linkedin.com/in/onkar-khedekar
              </Link>
            </Text>
          </Row>

          <Row>
            <Text style={{ color: "#4b5563", fontSize: "15px", lineHeight: "1.8", margin: "0" }}>
              <strong>Portfolio:</strong>{" "}
              <Link 
                href="https://onkarkhedekar.com" 
                style={{ color: "#2563eb", textDecoration: "none" }}
              >
                onkarkhedekar.com
              </Link>
            </Text>
          </Row>

          <Hr style={{ margin: "24px 0", borderColor: "#e5e7eb" }} />

          {/* Resume Button */}
          <Row>
            <Button
              href="https://drive.google.com/file/d/15X5yB2gkVRJPISjfsrPFd8u29YMVy5V-/view?usp=sharing"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "15px",
                display: "inline-block",
                marginTop: "10px",
              }}
            >
              📄 View My Resume
            </Button>
          </Row>

          {/* Closing */}
          <Row>
            <Text style={{ color: "#4b5563", fontSize: "16px", marginTop: "24px", lineHeight: "1.6" }}>
              Thank you for taking the time to consider my application. I look 
              forward to the opportunity to discuss how I can contribute to your team.
            </Text>
          </Row>

          <Row>
            <Text style={{ color: "#1f2937", fontSize: "16px", marginTop: "16px" }}>
              Best regards,
              <br />
              <strong>Onkar Khedekar</strong>
              <br />
              <span style={{ color: "#6b7280", fontSize: "14px" }}>
                Full Stack Developer (Fresher)
              </span>
            </Text>
          </Row>
        </Section>

        {/* Footer */}
        <Row>
          <Text style={{ 
            color: "#9ca3af", 
            fontSize: "13px", 
            textAlign: "center", 
            marginTop: "20px" 
          }}>
            This email was sent from Onkar Khedekar's portfolio website
          </Text>
        </Row>
      </Section>
    </Html>
  );
}