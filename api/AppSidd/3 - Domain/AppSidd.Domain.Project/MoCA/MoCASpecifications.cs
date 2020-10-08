using AppSidd.Domain.Specifications;
using System.Collections.Generic;

namespace AppSidd.Domain.Project
{
    internal class MoCASpecifications : List<SpecificationBase<MoCA>>
    {
        public MoCASpecifications()
        {
            AddRange(new List<SpecificationBase<MoCA>>() {
            });
        }
    }
}