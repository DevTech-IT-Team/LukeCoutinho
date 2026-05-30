/** Direct-to-checkout for Signature Wellness programs (WF10 / WF11) */

export function enrollProgram(navigate, program) {
  navigate('/payment', {
    state: {
      consult: {
        serviceId: program.id,
        serviceTitle: program.title,
        optionTitle: program.subtitle,
        label: program.title,
        price: program.price,
        priceValue: program.priceValue,
        mode: 'Program',
        duration: 'Ongoing',
      },
    },
  });
}

export const SIGNATURE_LUKE_PROGRAM = {
  id: 'signature-luke',
  title: 'Signature Wellness — With Luke',
  subtitle: 'Exclusive program with Luke',
  price: 'Upon consultation',
  priceValue: null,
};

export const SIGNATURE_TEAM_PROGRAM = {
  id: 'signature-team',
  title: 'Signature Wellness — With Team',
  subtitle: "Guided by Luke's integrative team",
  price: 'Upon consultation',
  priceValue: null,
};
