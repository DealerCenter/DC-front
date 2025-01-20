export const nameChanger = (name: string) => {
  switch (name) {
    case 'OrderGet':
      return 'order acceptance'
    case 'DebtExistence':
      return 'existence of debt'
    case 'InfoMissing':
      return 'incomplete information'
    case 'CompanyNewsAndServiceChange':
      return 'company news and changes'
    default:
      return ''
  }
}
