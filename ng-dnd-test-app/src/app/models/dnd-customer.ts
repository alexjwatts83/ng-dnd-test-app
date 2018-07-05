export interface IDndCustomer {
    DisplayName: string;
    JobNumber: string;
    Comment: string;
    Link: string;
    Suburb: string;
    PostCode: string;
    FirstName: string;
    LastName: string;
}

export class DndCustomer implements IDndCustomer {
    get DisplayName(): string{
        return this.FirstName + ' ' + this.LastName;
    }
    JobNumber: string;
    Comment: string;
    Link: string;
    Suburb: string;
    PostCode: string;
    FirstName: string;
    LastName: string;
    constructor(firstName: string, lastName: string, jobnumber: string, comment: string, link: string, suburb: string,postcode: string) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.JobNumber = jobnumber;
        this.Comment = comment;
        this.Link = link;
        this.Suburb = suburb;
        this.PostCode = postcode
    }
}