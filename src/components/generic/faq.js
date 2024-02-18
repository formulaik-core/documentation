import React from 'react';

export default function FAQStructuredData(props) {
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: props.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <h2>FAQs</h2>
      {faqStructuredData.mainEntity.map((faq) => (
        <React.Fragment key={faq.name}>
          <h3>{faq.name}</h3>
          {faq.acceptedAnswer.text}
        </React.Fragment>
      ))}
    </>
  );
}