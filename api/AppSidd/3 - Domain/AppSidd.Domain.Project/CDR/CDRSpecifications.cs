using AppSidd.Domain.Specifications;
using System.Collections.Generic;

namespace AppSidd.Domain.Project
{
    internal class CDRSpecifications : List<SpecificationBase<CDR>>
    {
        public CDRSpecifications()
        {
            AddRange(new List<SpecificationBase<CDR>>() {
            });
        }
    }
}