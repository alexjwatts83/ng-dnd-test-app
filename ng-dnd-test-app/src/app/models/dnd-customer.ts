export interface IDndCustomer {
    DisplayName: string;
    JobNumber: string;
    Comment: string;
    Link: string;
    Suburb: string;
    PostCode: string;
    FirstName: string;
    LastName: string;
    LeadNumber: string;
    Showroom: string;
    Consultant: string;
    AppointmentDate: Date;
    Designer: string;
}

export class DndCustomer implements IDndCustomer {
    get DisplayName(): string {
        return this.FirstName + ' ' + this.LastName;
    }
    JobNumber: string;
    Comment: string;
    Link: string;
    Suburb: string;
    PostCode: string;
    FirstName: string;
    LastName: string;
    LeadNumber: string;
    Showroom: string;
    Consultant: string;
    AppointmentDate: Date;
    Designer: string;
    constructor(firstName: string
        , lastName: string
        , jobnumber: string
        , comment: string
        , link: string
        , suburb: string
        , postcode: string
        , leadNumber: string, showroom: string, consultant: string
        , appointmentDate: Date,
        designer: string) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.JobNumber = jobnumber;
        this.Comment = comment;
        this.Link = link;
        this.Suburb = suburb;
        this.PostCode = postcode;
        this.LeadNumber = leadNumber;
        this.Showroom = showroom;
        this.Consultant = consultant;
        this.AppointmentDate = appointmentDate;
        this.Designer = designer;
    }
}