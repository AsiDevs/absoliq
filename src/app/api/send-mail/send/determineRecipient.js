const determineRecipient = async ({ cc = "", bcc = "", recipient = "" }) => {
  return { recipient, cc, bcc };
};

export default determineRecipient;
