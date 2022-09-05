function numUniqueEmails(emails: string[]): number {
  const uniqueEmails = new Set<string>();
  emails.forEach((x) => {
    const [userId, domain]: string[] = x.split("@");
    const plusIndex: number = userId.indexOf("+");
    const originUserId: string = userId
      .substring(0, plusIndex === -1 ? undefined : plusIndex)
      .replace(/\./g, "");
    uniqueEmails.add(`${originUserId}@${domain}`);
  });

  return uniqueEmails.size;
}
