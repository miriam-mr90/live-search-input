import styled, { css } from "styled-components";

const InputWrapper = styled.div`
    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;

    ${({ theme }) => css`
        @media ${theme.device.mobile} {
            width: 460px;
        }
    `}
`;

const Input = styled.input`
    ${({ theme, loading, typing }) => css`
        background: ${theme.color.white};
        color: ${theme.color.neutralGray};
        border: 1px solid ${theme.color.neutralGrayLight};
        border-radius: ${theme.radius};
        padding: 14px calc(16px + 24px) 14px 16px;
        width: 100%;
        height: 48px;
        z-index: 1;
        margin-bottom: -3px;

        ::placeholder {
            color: ${theme.color.neutralGray};
        }

        &:hover {
            background: ${theme.color.neutralGrayLightest};
            border-color: ${theme.color.neutralGray};
            color: ${theme.color.neutralGrayDarker};

            ::placeholder {
                color: ${theme.color.neutralGrayDarker};
            }

            & ~ ${Icon} {
                path {
                    stroke: ${theme.color.neutralGrayDarker};
                }
            }
        }

        &:focus {
            background: ${theme.color.neutralGrayLightest};
            border-color: ${theme.color.brandPrimary};
            box-shadow: ${theme.boxShadow};

            & ~ ${Icon} {
                path {
                    stroke: ${theme.color.brandPrimary};
                }
            }
        }

        ${loading && css`
            background: ${theme.color.neutralGrayLightest};
            border-color: ${theme.color.brandPrimary};
            box-shadow: ${theme.boxShadow};
            color: ${theme.color.neutralGrayDark};
        `}

        ${typing && css`
            color: ${theme.color.neutralGrayDark};
        `}
    `}
`;

const Label = styled.span`
    ${({ theme }) => css`
        color: ${theme.color.neutralGrayDarkest};
        font-weight: ${theme.font.weightBold};
        margin-bottom: 8px;
    `}
`;

const Icon = styled.svg`
    ${({ theme }) => css`
        position: absolute;
        top: 11px;
        right: 16px;
        height: 24px;
        width: 24px;
        z-index: 1;

        path {
            stroke: ${theme.color.neutralGrayDarker};
        }
    `}
`;

const Results = styled.ul`
    ${({ theme }) => css`
        background: ${theme.color.white};
        border: 1px solid ${theme.color.neutralGrayLight};
        border-radius: 0 0 ${theme.radius} ${theme.radius};
        color: ${theme.color.neutralGrayDark};
        display: flex;
        flex-direction: column;
        padding-top: 3px;
        max-height: 176px;
        overflow-y: auto;

        li {
            padding: 10px 16px;

            span {
                color: ${theme.color.neutralGray};
                margin-left: 4px;
            }

            &:hover {
                background: ${theme.color.neutralGrayLightest};
            }
        }

        em {
            font-style: initial;
            font-weight: ${theme.font.weightBold};
        }
    `}
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export {
    Icon,
    Input,
    InputWrapper,
    Label,
    Results,
    Wrapper,
};
