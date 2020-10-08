using AppSidd.Domain.Specifications;
using System.Collections.Generic;

namespace AppSidd.Domain.Project
{
    internal class MEEMSpecifications : List<SpecificationBase<MEEM>>
    {
        public MEEMSpecifications()
        {
            AddRange(new List<SpecificationBase<MEEM>>() {
            });
        }
    }
}