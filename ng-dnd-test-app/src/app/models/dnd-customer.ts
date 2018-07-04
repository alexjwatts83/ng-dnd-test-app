export interface IDndCustomer {
    DisplayName: string;
    JobNumber: string;
    Comment: string;
    Link: string;
    PostCode: string;
}

export class DndCustomer implements IDndCustomer {
    DisplayName: string;
    JobNumber: string;
    Comment: string;
    Link: string;
    PostCode: string;
    constructor(displayName: string, jobnumber: string, comment: string, link: string, postCode: string) {
        this.DisplayName = displayName;
        this.JobNumber = jobnumber;
        this.Comment = comment;
        this.Link = link;
        this.PostCode = postCode;
    }
}